import os
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt, JWTError

app = FastAPI()
token_auth_scheme = HTTPBearer()  # to parse auth header

JWT_SECRET = os.environ.get("JWT_SECRET", "YOUR_JWT_SECRET")


@app.get("/")
def read_root():
    return {"message": "Hello from ArgusVision FastAPI backend"}


@app.get("/secure-endpoint")
def secure_endpoint(credentials: HTTPAuthorizationCredentials = Depends(token_auth_scheme)):
    try:
        payload = jwt.decode(credentials.credentials,
                             "YOUR_JWT_SECRET_KEY", algorithms=["HS256"])

        return {"message": "You have accessed a secure endpoint", "payload": payload}
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token",
        )

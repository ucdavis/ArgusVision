from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

# For OIDC token verification you can use python-jose or authlib
# from jose import jwt, JWTError

app = FastAPI()
token_auth_scheme = HTTPBearer()

@app.get("/")
def read_root():
    return {"message": "Hello from ArgusVision FastAPI backend"}

@app.get("/secure-endpoint")
def secure_endpoint(credentials: HTTPAuthorizationCredentials = Depends(token_auth_scheme)):
    # Example: decode and validate token here
    # try:
    #     payload = jwt.decode(credentials.credentials, "YOUR_JWT_SECRET_KEY", algorithms=["HS256"])
    # except JWTError:
    #     raise HTTPException(
    #         status_code=status.HTTP_401_UNAUTHORIZED,
    #         detail="Invalid token",
    #     )
    return {"message": "You have accessed a secure endpoint"}

"""ArgusVision FastAPI backend application.

This module provides the main FastAPI application with authentication
and CORS middleware for the ArgusVision backend.
"""

import os
from typing import Annotated
from fastapi import FastAPI, Depends
from fastapi.security import HTTPBearer
from fastapi.middleware.cors import CORSMiddleware
from fastapi_nextauth_jwt import NextAuthJWT
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# TODO: read from config for valid deploy urls
origins = ["http://localhost:3002"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# for security, we'll read the nextauth jwt secret pass in cookies
JWT_SECRET = os.environ.get("JWT_SECRET", "YOUR_JWT_SECRET")
JWT = NextAuthJWT(
    secret=JWT_SECRET,
)


@app.get("/")
def read_root():
    """Root endpoint returning a welcome message.
    
    Returns:
        dict: A dictionary containing a welcome message.
    """
    return {"message": "Hello from ArgusVision FastAPI backend"}


@app.get("/secure-endpoint")
def secure_endpoint(jwt: Annotated[dict, Depends(JWT)]):
    """Secure endpoint that requires JWT authentication.
    
    Args:
        jwt (dict): JWT payload containing user authentication data.
        
    Returns:
        dict: A dictionary containing confirmation message and JWT payload.
    """
    print(jwt)

    return {"message": "You have accessed a secure endpoint", "payload": jwt}

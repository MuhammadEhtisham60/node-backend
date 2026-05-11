# Auth API Integration Guide

This guide provides the details for the authentication API endpoints and the payloads needed for Postman.

## 1. Create User (Initial Setup)
Use this endpoint to create your first admin user.

- **URL:** `{{base_url}}/api/auth/create`
- **Method:** `POST`
- **Body (JSON):**
```json
{
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "adminpassword123",
    "role": "admin"
}
```

## 2. Login
Use this endpoint to authenticate and get a JWT token.

- **URL:** `{{base_url}}/api/auth/login`
- **Method:** `POST`
- **Body (JSON):**
```json
{
    "email": "admin@example.com",
    "password": "adminpassword123"
}
```

## Response Example (Login/Create)
```json
{
    "_id": "645a1b...",
    "email": "admin@example.com",
    "role": "admin",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "profile": {
        "name": "Admin User"
    }
}
```

> [!NOTE]
> The `token` returned should be used in the `Authorization` header as `Bearer <token>` for protected routes (if you implement them later).

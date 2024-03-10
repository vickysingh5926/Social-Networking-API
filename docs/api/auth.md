# AUTH API

This documentation describes the API endpoints for user authentication and authorization in our Social Network Application.

## Base URL

`/auth`

## Endpoints

### `POST` /register

Register a new user.

#### Request

<details>
<summary> Toggle Request Body </summary>
    
```json
    {
    "name": "Dhan Bahadur Chhettri",
    "email": "test@gmail.com",
    "password": "test_password",
    "username":"test_user",
    "photo":"test_photo_url",
    }
```
</details>

#### Response

<details>
<summary> Toggle Response </summary>

```json
{
"loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MTQwLCJleHAiOjE3MTAwNDExNDB9.u421GRO72mjno2yWZPQe7o05sGxNSsrgn2-xuYTDBaA",
"refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MTQwLCJleHAiOjE3MTA2MDk5NDB9.5hTMQ0aXGRxIhvijUsHoVyqdV4M6wGScfztOKd82boA",
"user": {
"name": "Dhan Bahadur Chhettri",
"email": "test@gmail.com",
"username": "test_user",
"photo": "test_photo_url",
"id": "3ec2d73f-4c2b-4e13-a105-618f6ff16723"
}
}

```

</details>


### `POST` /login

Authenticate a user with email and password.

#### Request

<details>
<summary> Toggle Request Body </summary>

```json
    {
    "email": "test@gmail.com",
    "password": "test_password"
    }
```
</details>

#### Response

<details>
<summary> Toggle Response </summary>

```json
    {
  "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU",
  "user_data": {
    "_id": "65ec9b94cd10d8f70f501468",
    "id": "3ec2d73f-4c2b-4e13-a105-618f6ff16723",
    "name": "Dhan Bahadur Chhettri",
    "username": "test_user",
    "email": "test@gmail.com",
    "followers": [],
    "following": [],
    "posts": [],
    "photo": "test_photo_url",
    "__v": 0
  }
}
```
</details>




### `POST` /update

Update user details.

#### Request

<details>
<summary> Toggle Request Body </summary>

```json
    {
    "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU",
  "name": "Dhan Bahadur Chhettri Changed",
    "email": "test1@gmail.com",
    "password": "test_password_changed",
    "username":"test_user",
    "photo":"test_photo_url",
    "id": "3ec2d73f-4c2b-4e13-a105-618f6ff16723"
}
```

</details>

#### Response

<details>
<summary> Toggle Response </summary>

```json
    {
    "_id": "65ec9b94cd10d8f70f501468",
    "id": "3ec2d73f-4c2b-4e13-a105-618f6ff16723",
    "name": "Dhan Bahadur Chhettri Changed",
    "username": "test_user",
    "email": "test1@gmail.com",
    "followers": [],
    "following": [],
    "posts": [],
    "photo": "test_photo_url",
    "__v": 0,
    "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU"
}
```

</details>


### `POST` /delete

Delete user account.

#### Request

<details>
<summary> Toggle Request Body </summary>

```json
    {
    "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU",
  "email":"test@gmail.com"
}
```

</details>

#### Response

<details>
<summary> Toggle Response </summary>

```json
    {
    "message": "User account deleted successfully"
}

```

</details>


### `POST` /user

Get user details.

#### Request

<details>
<summary> Toggle Request Body </summary>

```json
    {

    "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU",
  "id":"6125e977-f946-400c-98cb-19473f886429"

    }
```

</details>

#### Response

<details>
<summary> Toggle Response </summary>

```json
    {
    "_id": "65ecac9b7a94e9ebb685908f",
    "id": "6125e977-f946-400c-98cb-19473f886429",
    "name": "Dhan Bahadur Chhettri Changed",
    "username": "test_user",
    "email": "test@gmail.com",
    "followers": [],
    "following": [],
    "posts": [],
    "photo": "test_photo_url",
    "__v": 0,
    "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU"
}
```

</details>


### `POST` /follow

Follow a user.

#### Request

<details>
<summary> Toggle Request Body </summary>

```json
    {
    "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU",
  "id":"6125e977-f946-400c-98cb-19473f886429",
  "followingId":"15952308-a31c-40ca-8253-4fcca4ea4b1c"
}
```

</details>

#### Response

<details>
<summary> Toggle Response </summary>

```json
    {
    "message": "User followed successfully",
    "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU"
}
```

</details>


### `POST` /unfollow

Unfollow a user.

#### Request

<details>
<summary> Toggle Request Body </summary>

```json
    {
    "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU",
  "id":"6125e977-f946-400c-98cb-19473f886429",
  "followingId":"15952308-a31c-40ca-8253-4fcca4ea4b1c"
}
```

</details>


#### Response

<details>
<summary> Toggle Response </summary>

```json
    {
    "message": "User unfollowed successfully",
    "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU"
}
```

</details>


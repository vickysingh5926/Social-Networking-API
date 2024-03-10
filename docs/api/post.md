# POST API

This documentation describes the API endpoints for post management in our Social Network Application.

## Base URL

`/post`

## Endpoints

### `GET` /create

Get all posts.

#### Request

<details>
<summary> Toggle Request Body </summary>

```json
{
  "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU",
  "body": "This is a Post",
  "photo": "https://www.google.com",
  "user_ID": "6125e977-f946-400c-98cb-19473f886429"
}
```

</details>

#### Response

<details>
<summary> Toggle Response </summary>

```json
{
  "_id": "65ecba3b7ddd42ac7b1e4ae6",
  "body": "This is a Post",
  "photo": "https://www.google.com",
  "likes": [],
  "postedby": {
    "_id": "65ecac9b7a94e9ebb685908f",
    "id": "6125e977-f946-400c-98cb-19473f886429",
    "name": "Dhan Bahadur Chhettri Changed",
    "username": "test_user",
    "email": "test@gmail.com",
    "photo": "test_photo_url"
  },
  "comments": [],
  "createdAt": "2024-03-09T19:36:27.358Z",
  "updatedAt": "2024-03-09T19:36:27.358Z",
  "__v": 0,
  "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU"
}
```

</details>

### `PUT` /like

Like a post.

#### Request

<details>
<summary> Toggle Request Body </summary>

```json
{
  "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU",
  "userID": "6125e977-f946-400c-98cb-19473f886429",
  "postID": "65ecb8cd81add181958ed2bf"
}
```

</details>

#### Response

<details>
<summary> Toggle Response </summary>

```json
{
  "message": "Post Liked",
  "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU"
}
```

</details>

### `PUT` /unlike

Unlike a post.

#### Request

<details>
<summary> Toggle Request Body </summary>

```json
{
  "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU",
  "userID": "6125e977-f946-400c-98cb-19473f886429",
  "postID": "65ecb8cd81add181958ed2bf"
}
```

</details>

#### Response

<details>
<summary> Toggle Response </summary>

```json
{
  "message": "Post Unliked",
  "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU"
}
```

</details>

### `POST` /comment

Comment on a post.

#### Request

<details>
<summary> Toggle Request Body </summary>

```json
{
  "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU",
  "userID": "6125e977-f946-400c-98cb-19473f886429",
  "postID": "65ecb8cd81add181958ed2bf",
  "comment": "Good Boy"
}
```

</details>

#### Response

<details>
<summary> Toggle Response </summary>

```json
{
  "message": "Comment Added",
  "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU"
}
```

</details>

### `DELETE` /delete

Delete a post.

#### Request

<details>
<summary> Toggle Request Body </summary>

```json
{
  "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU",
  "userID": "6125e977-f946-400c-98cb-19473f886429",
  "postID": "65ecb92fc1bebb84a92dd355"
}
```

</details>

#### Response

<details>
<summary> Toggle Response </summary>

```json
{
  "message": "Post Deleted",
  "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU"
}
```

</details>

### `GET` /get-follower-posts

Get all posts of the users you follow with latest posts first.

#### Request

<details>
<summery>Toogle Request Body</summery>

```json
{
  "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU",
  "userID": "15952308-a31c-40ca-8253-4fcca4ea4b1c"
}
```

</details>

#### Response

<details>
<summary> Toggle Response </summary>

```json
{
  "posts": [
    {
      "_id": "65ecba3b7ddd42ac7b1e4ae6",
      "body": "This is a Post",
      "photo": "https://www.google.com",
      "likes": [],
      "postedby": {
        "_id": "65ecac9b7a94e9ebb685908f",
        "id": "6125e977-f946-400c-98cb-19473f886429",
        "name": "Dhan Bahadur Chhettri Changed",
        "username": "test_user",
        "email": "test@gmail.com",
        "password": "$2b$10$7WKuRG8toogGRYzcUIBWze6sw16Z.oCTEoYlETuBOEPm0uLE1slIG",
        "followers": ["65ec436fb09b0771a8ae07e0"],
        "following": [],
        "posts": [
          "65ecb906c1bebb84a92dd350",
          "65ecb9b1a1bbc3d39fbd5253",
          "65ecb9e55eeb446dc47c2347",
          "65ecba3b7ddd42ac7b1e4ae6"
        ],
        "photo": "test_photo_url",
        "__v": 14
      },
      "comments": [],
      "createdAt": "2024-03-09T19:36:27.358Z",
      "updatedAt": "2024-03-09T19:36:27.358Z",
      "__v": 0
    },
    {
      "_id": "65ecb9e55eeb446dc47c2347",
      "body": "This is a Post",
      "photo": "https://www.google.com",
      "likes": [],
      "postedby": {
        "_id": "65ecac9b7a94e9ebb685908f",
        "id": "6125e977-f946-400c-98cb-19473f886429",
        "name": "Dhan Bahadur Chhettri Changed",
        "username": "test_user",
        "email": "test@gmail.com",
        "password": "$2b$10$7WKuRG8toogGRYzcUIBWze6sw16Z.oCTEoYlETuBOEPm0uLE1slIG",
        "followers": ["65ec436fb09b0771a8ae07e0"],
        "following": [],
        "posts": [
          "65ecb906c1bebb84a92dd350",
          "65ecb9b1a1bbc3d39fbd5253",
          "65ecb9e55eeb446dc47c2347",
          "65ecba3b7ddd42ac7b1e4ae6"
        ],
        "photo": "test_photo_url",
        "__v": 14
      },
      "comments": [],
      "createdAt": "2024-03-09T19:35:01.938Z",
      "updatedAt": "2024-03-09T19:35:01.938Z",
      "__v": 0
    }
  ],
  "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU"
}
```

</details>

### `GET` /all

Get all posts.

#### Request

<details>
<summary> Toggle Request Body </summary>

```json
{
  "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU"
}
```

</details>

#### Response

<details>
<summary> Toggle Response </summary>

```json
{
  "posts": [
    {
      "_id": "65ecb906c1bebb84a92dd350",
      "body": "This is a Post",
      "photo": "https://www.google.com",
      "likes": [],
      "postedby": {
        "_id": "65ecac9b7a94e9ebb685908f",
        "id": "6125e977-f946-400c-98cb-19473f886429",
        "name": "Dhan Bahadur Chhettri Changed",
        "username": "test_user",
        "email": "test@gmail.com",
        "photo": "test_photo_url"
      },
      "comments": [],
      "createdAt": "2024-03-09T19:31:18.064Z",
      "updatedAt": "2024-03-09T19:31:18.064Z",
      "__v": 0
    },
    {
      "_id": "65ecb9b1a1bbc3d39fbd5253",
      "body": "This is a Post",
      "photo": "https://www.google.com",
      "likes": [],
      "postedby": {
        "_id": "65ecac9b7a94e9ebb685908f",
        "id": "6125e977-f946-400c-98cb-19473f886429",
        "name": "Dhan Bahadur Chhettri Changed",
        "username": "test_user",
        "email": "test@gmail.com",
        "photo": "test_photo_url"
      },
      "comments": [],
      "createdAt": "2024-03-09T19:34:09.952Z",
      "updatedAt": "2024-03-09T19:34:09.952Z",
      "__v": 0
    }
  ],
  "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTAwNDEyNTd9.1v2-RhTgcLrCob15EPGXWB7oBchD38ll0S-wL7nQ5H0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYzJkNzNmLTRjMmItNGUxMy1hMTA1LTYxOGY2ZmYxNjcyMyIsIm5hbWUiOiJEaGFuIEJhaGFkdXIgQ2hoZXR0cmkiLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG90byI6InRlc3RfcGhvdG9fdXJsIiwiaWF0IjoxNzEwMDA1MjU3LCJleHAiOjE3MTA2MTAwNTd9.0D29ABF64JasWuk6BicrVdo5EReIfetwhHKxJO9qefU"
}
```

</details>

# Crisis Counseling Service Platform - Adi Abelevitch 315250688

## Overview
This project implements a basic server for a Counseling Service Platform using Node.js. The platform facilitates the management of counseling sessions, offering functionalities such as creating, updating, deleting, and fetching sessions. The server is designed to handle JSON data and is configured to run on http://localhost:8080.

## Prerequisites

-Node HTTP Server
-Node Custom Modules
-NPM Packages
-RESTful API
-ES6 Features
-HTTP Status Codes
-Logs
-Node Events
- CRUD Operations (GET, POST, PUT, DELETE).


### POST /addSession
Creates a new counseling session.
Requires a JSON body with session details.
```json
{
 "id": 1,
 "crisis": "Family Crisis",
 "clientName": "John Doe",
 "counslerName": "Jane Doe",
 "date": "2024-02-01",
 "sessionStatuss": "In Progress"
}

```
### GET /getSession
- Creates a new counseling session.
- Requires a JSON body with session details.
  Example:
```json
{
 "id": 1
}
```
### PUT /updateSession
Updates an existing counseling session.
Requires a JSON body with the updated session details.
Example:
```json
{
 "id": 1,
 "crisis": "Updated Crisis",
 "clientName": "Updated Client",
 "counslerName": "Updated Counselor",
 "date": "2024-02-01",
 "sessionStatuss": "Completed"
}
```
### DELETE /deleteSession
Deletes an existing counseling session.
Requires a JSON body with the session's ID
example:
```json
{
 "id": 1
}
```
### GET /getSession
Retrieves a single counseling session by ID.
Requires a JSON body with the session's ID.
example:
```json
{
 "id": 1
}

```

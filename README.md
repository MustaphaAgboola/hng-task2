# HNGx TASK TWO API Documnentation

## INTRODUCTION

This API allows you manage name by providing endpoints for creating, reading, updating and delete names.

## BASE URL

https://hngx-task2.onrender.com

## Error Handling 

The API return standard HTTP status codes and JSON error response in this format:

![Example Image](/assets/Screenshot%20from%202023-09-11%2020-00-24.png)

# Endpoints

# 1. Create name
* **Endpoint**: /api
* **Method**: POST
* **Request Body**: The name in JSON Format
* **Example Request**: 

![POST Example Image](/assets/post.png)

* **Example Response**: 

![POST RESPONSE EXAMPLE Image](/assets/postResponse.png)

# 2. Read name
* **Endpoint**: /api/user_id
* **Method**: GET
* **Description**: Find a user using the user ID
* **Parameters**: User ID must be passed into the endpoint
* **Example Request**: 

![GET Example Image](/assets/get.png)

* **Example Response**: 

![Get Example response Image](/assets/getResponse.png)

# 3. Update Name
* **Endpoint**: /api/user_id
* **Method**: PUT
* **Description**: Update user using the user ID
* **Parameters**: User ID must be passed into the endpoint

* **Example Request**: 

![PUT Example Image](/assets/put.png)

* **Example Response**:

![Put Response Image](/assets/putResponse.png)

# 4. Delete Name
* **Endpoint**: /api/user_id
* **Method**: PUT
* **Description**: Delete a User using user ID
* **Parameters**: User ID must be passed into the endpiont

* **Example Request**: 

![Delete Example Image](/assets/delete.png)

* **Example Response**: 

![Delete Response Image](/assets/deleteResponse.png)

## Conlusion

Thank you for using the API. If you have any question or assistance please reach out to mustaphaagboola1@yahoo.com

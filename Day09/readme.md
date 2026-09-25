in this lecture we will elarn about middleware and server handling and all 

// at server side we have two parts admin and user         
 authenticate = check krna ki real h ya fake
 authorization = tells you what power do you have,authorized have some powers or limited powers

| Code    | Meaning               | When you use it                                         |
| ------- | --------------------- | ------------------------------------------------------- |
| **200** | OK                    | Request succeeded                                       |
| **201** | Created               | New data/resource successfully created                  |
| **204** | No Content            | Success, but nothing to return                          |
| **400** | Bad Request           | Client sent invalid data                                |
| **401** | Unauthorized          | User is not authenticated/logged in                     |
| **403** | Forbidden             | User is authenticated but doesn't have permission       |
| **404** | Not Found             | Requested resource doesn't exist                        |
| **409** | Conflict              | Request conflicts with existing data                    |
| **422** | Unprocessable Content | Data format is valid but validation fails               |
| **500** | Internal Server Error | Something went wrong on backend                         |
| **502** | Bad Gateway           | Your server got an invalid response from another server |
| **503** | Service Unavailable   | Server/service temporarily unavailable                  |

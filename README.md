# Receipt Processor API
This project implements a web service to process and evaluate receipts based on predefined rules. 
The service is built using Express.js and provides two main endpoints for processing receipts and retrieving the awarded points.

## Prerequisites
Before running this application, ensure you have the following software installed:

* Node.js: JavaScript runtime environment. 
* Postman: API testing tool. 
  
## Installation 
* Clone the repository to your local machine:
  ```
  git clone 
  cd receipt-processor
  ```
* Install the required dependencies using npm:

  ```
  npm install
  ```


## Running the Application 
* Navigate to the project directory:
  ```
  cd receipt-processor
  ```
* Start the Express.js server:

  ```
  npm start
  ```
The server will start on port 3000 by default.


## Testing the API

You can use Postman to test the API endpoints.

### POST /receipts/process

Description: Submits a receipt for processing.

URL: http://localhost:3000/receipts/process

Method: POST

Headers:

Content-Type: application/json

Request Body: (raw JSON)
```json
{
  "retailer": "Target",
  "purchaseDate": "2022-01-01",
  "purchaseTime": "13:01",
  "items": [
    {
      "shortDescription": "Mountain Dew 12PK",
      "price": "6.49"
    },{
      "shortDescription": "Emils Cheese Pizza",
      "price": "12.25"
    },{
      "shortDescription": "Knorr Creamy Chicken",
      "price": "1.26"
    },{
      "shortDescription": "Doritos Nacho Cheese",
      "price": "3.35"
    },{
      "shortDescription": "   Klarbrunn 12-PK 12 FL OZ  ",
      "price": "12.00"
    }
  ],
  "total": "35.35"
}
```

Response: A JSON object containing the ID assigned to the receipt.

```json
{
  "id": "7fb1377b-b223-49d9-a31a-5a02701dd310"
}

```

### GET /receipts/:id/process
Description: Returns the points awarded for the receipt.

URL: http://localhost:3000/receipts/:id/points

Replace :id with the actual receipt ID received from the POST /receipts/process response.

Method: GET

Response: A JSON object containing the number of points awarded
```json
{
  "points": 32
}

```
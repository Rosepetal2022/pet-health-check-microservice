# Pet Health Check Microservice

This microservice provides functionality for tracking and managing pet health metrics, including Temperature, Pulse, and Respiration (TPR). It is currently available for dogs and cats.

## Features

- **TPR Tracking:** Allows for input and retrieval of Temperature, Pulse, and Respiration data for pets.
- **Pet Size Adjustment:** Takes into account the size of the dog for accurate health monitoring. There is no size adjustment for cats.

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/Rosepetal2022/pet-health-check-microservice.git
cd pet-health-check-microservice
```

2. Install dependencies
```bash
 npm install
 ```

3. Start Service
```bash
node server.js
```

## API Endpoints

### Check Dog TPR

- **Endpoint:** `GET /dog`
- **Description:** This endpoint checks the TPR (Temperature, Pulse, Respiration) of a dog and returns a message based on the provided stats.

- **Query Parameters:**
  - `temperature` (number): The dog's temperature.
  - `pulse` (number): The dog's pulse rate.
  - `respiration` (number): The dog's respiration rate.
  - `size` (number): The weight of the dog.
  - `petId` (string): The ID of the specific dog.

- **Example Request:**
  ```bash
  GET /dog?temperature=101.5&pulse=120&respiration=30&size=30&petId=12345


Endpoint: `GET /cat
Description: This endpoint will check the tpr of the cat and send you back a message based on the stats.
Query Parameters:
    + `temperature`(number) - the cat's' temperature
    + `pulse`(number) - the cat's pulse
    + `respiration`(number) - the cat's respiration
    + `petId`(string) - the ID of that specific cat
Example Request
```bash
    GET /cat?temperature=101.5&pulse=120&respiration=30&&petId=12345
```

Endpoint: `POST api/save-tpr`
Description: This endpoint will save the tpr data for a dog based on the petId.
Request Body:
```bash
{
  "temperature": "number",
  "pulse": "number",
  "respiration": "number",
  "size": "number",
  "petId": "string"
}
```

Endpoint: `POST api/save-tpr/cat`
Description: This endpoint will save the data for a cat based on the petId.
Request Body:
```bash
{
  "temperature": "number",
  "pulse": "number",
  "respiration": "number",
  "petId": "string"
}
```

Endpoint: `GET api/get-tpr/:petId`
Description: This endpoint will retrieve the data for an animal based on the petId.
URL Parameters: `petId` - the id of the pet the TPR data is being requested.
Response:
```bash
    [
  {
    "petId": "12345",
    "temperature": 101.5,
    "pulse": 120,
    "respiration": 30,
    "date": "2024-08-20T14:30:00Z"
  },
  {
    "petId": "12345",
    "temperature": 101.2,
    "pulse": 118,
    "respiration": 28,
    "date": "2024-08-19T09:15:00Z"
  }
]
```

## Contact
For questions for support, please contact: 
+ **Email** marcotter25@yahoo.com
+ **GitHub** [Rosepetal2022](https://github.com/Rosepetal2022)
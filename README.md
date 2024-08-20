# Pet Health Check Microservice

This microservice provides functionality for tracking and managing pet health metrics, including Temperature, Pulse, and Respiration (TPR). It currently supports dogs and cats.

## Features

- **TPR Tracking:** Allows for input and retrieval of Temperature, Pulse, and Respiration data for pets.
- **Pet Size Adjustment:** Takes into account the size of the dog for accurate health monitoring. No size adjustment is required for cats.

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/Rosepetal2022/pet-health-check-microservice.git
    cd pet-health-check-microservice
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Start the service**
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
    ```

### Check Cat TPR

- **Endpoint:** `GET /cat`
- **Description:** This endpoint checks the TPR (Temperature, Pulse, Respiration) of a cat and returns a message based on the provided stats.

- **Query Parameters:**
    - `temperature` (number): The cat's temperature.
    - `pulse` (number): The cat's pulse rate.
    - `respiration` (number): The cat's respiration rate.
    - `petId` (string): The ID of the specific cat.

- **Example Request:**
    ```bash
    GET /cat?temperature=101.5&pulse=120&respiration=30&petId=12345
    ```

### Save Dog TPR Data

- **Endpoint:** `POST /api/save-tpr`
- **Description:** This endpoint saves the TPR (Temperature, Pulse, Respiration) data for a dog based on the provided `petId`.

- **Request Body:**
    ```json
    {
      "temperature": "number",
      "pulse": "number",
      "respiration": "number",
      "size": "number",
      "petId": "string"
    }
    ```

### Save Cat TPR Data

- **Endpoint:** `POST /api/save-tpr/cat`
- **Description:** This endpoint saves the TPR (Temperature, Pulse, Respiration) data for a cat based on the provided `petId`.

- **Request Body:**
    ```json
    {
      "temperature": "number",
      "pulse": "number",
      "respiration": "number",
      "petId": "string"
    }
    ```

### Retrieve TPR Data for a Pet

- **Endpoint:** `GET /api/get-tpr/:petId`
- **Description:** This endpoint retrieves the TPR (Temperature, Pulse, Respiration) data for an animal based on the provided `petId`.

- **URL Parameters:**
    - `petId` (string): The ID of the pet for which TPR data is being requested.

- **Example Request:**
    ```bash
    GET /api/get-tpr/12345
    ```

- **Response:**
    - **Success (200 OK):**
      ```json
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

    - **No Data Found (404 Not Found):**
      ```json
      {
        "message": "No TPR data found for this pet"
      }
      ```

    - **Server Error (500 Internal Server Error):**
      ```json
      {
        "message": "Server error",
        "error": "Detailed error message here"
      }
      ```

## Contact

For questions or support, please contact:

- **Email:** [marcotter25@yahoo.com](mailto:marcotter25@yahoo.com)
- **GitHub:** [Rosepetal2022](https://github.com/Rosepetal2022)
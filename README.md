# Bajaj Finserv Assignment API

This is a Node.js REST API for the Bajaj Finserv assignment.

## Features
- POST endpoint `/bfhl` that processes an array and returns:
  - Status
  - User ID
  - Email ID
  - College Roll Number
  - Array for even numbers
  - Array for odd numbers
  - Array for alphabets (uppercase)
  - Array for special characters
  - Sum of numbers (as string)
  - Concatenation of all alphabetical characters in reverse order with alternating caps

## User Details
- **Name:** Aarav Thakran
- **Roll Number:** 2210991114
- **Email:** aarav1114.be22@chitkara.edu.in

## How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. The server will run on `http://localhost:3000`

## API Usage

### Endpoint
- **POST** `/bfhl`
- **Body:**
  ```json
  {
    "data": ["a", "1", "334", "4", "R", "$"]
  }
  ```

### Example Response
```json
{
  "is_success": true,
  "user_id": "aarav_thakran_17092003",
  "email": "aarav1114.be22@chitkara.edu.in",
  "roll_number": "2210991114",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Deployment
- You can deploy this API to Vercel, Railway, Render, or any Node.js hosting provider.
- Make sure to set the start command to `npm start`.

## License
ISC 
# Technical Debt

## 1. Duplicate code in message handling logic
Some message functions are repeated instead of being reusable.

## 2. Poor naming conventions in variables
Some variables are unclear (e.g., data1, temp2).

## 3. No input validation for chat messages
Users can send empty or invalid messages.

## 4. Inefficient chat matching logic
Matching process loops through full list instead of optimized queue.

## 5. No separation of concerns in backend logic
Business logic and connection logic are mixed in one file.
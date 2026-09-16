# House Price Prediction (End-to-End ML Web App)

An end-to-end machine learning project that predicts house prices in India based on property features. It includes a trained ML model, a FastAPI backend, and a React frontend.

## Overview

This project:
- Cleans and processes real estate data from India
- Trains and compares two regression models
- Serves the best model through a FastAPI backend
- Provides a React frontend where users enter property details and get a predicted price

## Tech Stack

| Layer | Technology |
|---|---|
| Data Processing | Python, Pandas, NumPy |
| Machine Learning | Scikit-learn (RandomForestRegressor) |
| Backend | FastAPI, Uvicorn, Pydantic |
| Frontend | React, TypeScript, Vite |
| Version Control | Git, GitHub |

## Project Structure

```
house-price-prediction/
├── app/                        # FastAPI backend
│   ├── main.py
│   ├── schemas/
│   ├── services/
│   └── api/routes/
├── frontend/                   # React frontend
│   └── src/
├── screenshots/
├── house-price-model1.ipynb    # Data cleaning, EDA, training
├── house_price.pkl             # Trained model
├── locations.json              # Allowed locations for the frontend dropdown
├── requirements.txt
└── README.md
```

## Dataset

**Source:** [House Price by Juhi Bhojani](https://www.kaggle.com/datasets/juhibhojani/house-price)

- Size: 187,531 rows, 21 columns
- Content: real property listings from India
- Target: `Amount (in rupees)`, converted to a numeric price

### Download Instructions

1. Create a free account at [kaggle.com](https://www.kaggle.com)
2. Go to Settings > API > Create New Token
3. Download `kaggle.json` and place it in `~/.kaggle/`
4. Run:

```bash
kaggle datasets download -d juhibhojani/house-price
unzip house-price.zip
```

The raw CSV is not committed to this repository because of its size.

## Setup Instructions

### Prerequisites
- Python 3.11+
- Node.js 18+
- Git

### Backend Setup

```bash
cd house-price-prediction
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

Backend runs on: http://localhost:8000

### Frontend Setup

```bash
cd house-price-prediction/frontend
npm install
npm run dev
```

Frontend runs on: http://localhost:5173

### Environment Variables

Create a `.env` file inside the `frontend/` folder:

```
VITE_API_BASE_URL=http://localhost:8000
```

## API Reference

### GET /health
Checks if the API is running.

Response:
```json
{"status": "ok"}
```

### POST /predict
Predicts the price of a house.

Request Body:
```json
{
  "location": "Mumbai",
  "carpet_area_sqft": 1200,
  "floor_num": 3,
  "bathroom": 2,
  "balcony": 1,
  "furnishing": "Semi-Furnished",
  "transaction": "Resale",
  "ownership": "Freehold",
  "facing": "East"
}
```

Response:
```json
{"predicted_price": 12500000.0}
```

## Model Metrics

The best model is RandomForestRegressor.

| Metric | Value |
|---|---|
| MAE | 1,444,530 |
| RMSE | 4,206,246 |
| R² | 0.878 |

### Model Comparison

| Model | MAE | RMSE | R² |
|---|---|---|---|
| Linear Regression | 4,413,547 | 7,143,162 | 0.651 |
| Random Forest | 1,444,530 | 4,206,246 | 0.878 |

Random Forest performed better than Linear Regression because it can capture non-linear relationships between the features and the price, which the dataset clearly has.

## Screenshots



![Backend API](screenshots/backend.png)



## Author

**Nour Ibrahim**
GitHub: [@NOURIBRAHIM56](https://github.com/NOURIBRAHIM56)

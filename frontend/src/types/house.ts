export interface PredictionRequest {
    location: string;
    carpet_area_sqft: number;
    floor_num: number;
    Bathroom_num: number;
    Balcony_num: number;
    Furnishing: string;
    Transaction: string;
    Ownership: string;
    facing: string;
  }
  
  export interface PredictionResponse {
    predicted_price: number;
  }
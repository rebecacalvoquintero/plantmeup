export type State<Data, ErrorType> =
  | {
      data: Data;
      loading: false;
      success: true;
      error?: ErrorType;
    }
  | {
      data: undefined;
      loading: true;
      success: false;
      error?: ErrorType;
    }
  | {
      data: undefined;
      loading: false;
      success: false;
      error?: ErrorType;
    };

    type Image = {
        image_id: number;
        license: number;
        license_name: string;
        license_url: string;
        original_url: string;
        regular_url: string;
        medium_url: string;
        small_url: string;
        thumbnail: string;
    };

export type PlantData = {
    id: number;
    common_name: string;
    scientific_name: string[];
    other_name: string[];
    cycle: string;
    watering: string; //change to ENUM
    sunlight: string[];
    default_image: Image; 
};

export interface PlantResponse {
    currentPage: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
    data: PlantData[];
};
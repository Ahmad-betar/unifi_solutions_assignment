export type getReportedBikeTheftsType = {
  bikes: {
    date_stolen: number;
    description: string;
    frame_colors: string[];
    frame_model: string;
    id: number;
    is_stock_img: boolean;
    large_img: string;
    location_found: string;
    manufacturer_name: string;
    external_id: null;
    registry_name: null;
    registry_url: null;
    serial: "Hidden";
    status: "found";
    stolen: boolean;
    stolen_coordinates: number[];
    stolen_location: string;
    thumb: string;
    title: string;
    url: string;
    year: number;
    propulsion_type_slug: string;
    cycle_type_slug: string;
  }[];
};

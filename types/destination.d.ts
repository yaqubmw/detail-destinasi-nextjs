export interface Destination {
    id: string;
    name: string;
    city: string;
    province: string;
    description: string;
    image: string;
    coordinates: {
        lat: number;
        lng: number;
    };
}
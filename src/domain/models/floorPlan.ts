import { Attachment } from "./attachment";

export type FloorPlan = {
    // The name of the floor plan
    name: string;
    // The description of the floor plan
    description?: string;
    // The square footage of the floor plan
    sqFootMasonry: number;
    // The count of bedrooms
    bedrooms: number;
    // The count of full baths
    bathsFull: number;
    // The count of half baths
    bathsHalf: number;
    // The amount of stories
    levels: number;
    // The amount of garage spaces for cars
    garageSpaces: number;
    // A tour link to give the visual representation of the floor plan
    tourLink: string;
    // The cover image of the floor plan
    titleImage: Attachment;
    // The additional images for the floor plan
    images: Attachment[];
  };
  
import { Attachment } from "./attachment";
import { FloorPlan } from "./floorPlan";
import { Neighborhood } from "./neighborhood";

export type Property = {
    // The address of the house
    streetAddress: string;
    // The lot number within the block
    lot: string;
    // The block number within the neighborhood
    block: string;
    // Additional information regarding the state of this specific property
    flagType: string;
    // The status of the construction stage on the property
    constructionStatus: string;
    // The direction of the front of the property
    directionFacing: string;
    // The dimensions of the lot
    lotDimensions: {
      width: number;
      depth: number;
    };
    tourLink?: string;
    // The price of the property
    price: number;
    // The square footage of the lot
    sqFootLot: number;
    // Whether the property is pool compatible or not
    isPoolCompatible: boolean;
    // The estimated closing date iso string if the property sold today
    estimatedClosingDate: string;
    // The main image of a property
    titleImage?: Attachment;
    // The list of images for the property
    images: Attachment[];
    // The image of the lot plat
    plat: Attachment;
    // The floor plan built on the property
    floorPlan?: FloorPlan;
    // The house style applied to the floor plan
    houseStyle?: {
      name: string;
    };
    // The location of the property
    location: Location;
    // The neighborhood that the property belongs to
    neighborhood: Neighborhood;
  };
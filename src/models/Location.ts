

export type Location = {
    // The name of the location if it has one
    name?: string;
    // The type of location if it has one
    locationSubType?: string;
    // Used on objects that have a single point
    center?: number[];
    // Used on objects that are polygons
    perimeter?: number[][];
  };
import { Amenity } from "./amenity";
import { Attachment } from "./attachment";
import { Location } from "./Location";

export type Neighborhood = {
    // The name of the neighborhood
    name: string;
    // The city that the neighborhood is in
    city: string;
    // The nearest main cross roads
    intersection: string;
    // The main elementary school for this neighborhood
    elementarySchool: string;
    // The size of lots in the neighborhood
    lotType: string;
    // The top down image for the neighborhood
    droneImage: Attachment;
    // The images to show off the neighborhoood
    salesImages: Attachment[];
    // The amenities that the neighborhood has
    amenities?: Amenity[];
    // The main conveniences for the neighborhood
    conveniences?: Location[];
    // The location of the neighborhood
    location: Location;
    // The location of the school district location
    schoolDistrictLocation: Location;
  };
  
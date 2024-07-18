import { Property } from "../models/property";
import client from "./client";

const fetchProperties = async () : Promise<Property[]> => {
    return client.get("/properties?market=tulsa").then((response) =>{
        
        const properties: Property[] = response.data;

        return properties.filter((property: Property)=>{
            return (property.constructionStatus !== "Available Lot" && property.constructionStatus !== "Early Construction")
        });
    
    });
}

export default fetchProperties;
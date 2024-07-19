import { Property } from "../models/property"
import utilValidation from "./validations"
import noImage from "../assets/no-image.svg"

class PropertyUtil {
    
    getTitleImage = (data: Property) : string =>{
        return data.titleImage !== undefined && data.titleImage.url.length !== 0 && utilValidation.validateUrl(data.titleImage.url) ?
         data.titleImage.url 
         : data.floorPlan !== undefined && data.floorPlan.titleImage !== undefined ? data.floorPlan.titleImage.url : noImage
    }
    
    getSquareFootMasonry = (data:Property) : number => {
        return data.floorPlan !== undefined ? data.floorPlan.sqFootMasonry : 0
    }

    getFloorPlanName = (data:Property) : string => {
        console.log(data)
        return data.floorPlan !== undefined ? data.floorPlan.name : ""
    }
    
    getHouseProperty = (data:Property) : string => {
        return data.houseStyle !== undefined ? data.houseStyle.name.toUpperCase() : ""
    }
    
    getBedsProperty = (data:Property) : number => {
        return data.floorPlan !== undefined ? data.floorPlan.bedrooms : 0
    }
    
    getBathProperty = (data:Property) : string => {
        return data.floorPlan !== undefined ? data.floorPlan.bathsFull.toString() + "/" + (data.floorPlan.bathsHalf).toString() : ""
    }

    getSchoolDistrictName = (data:Property) : string => {
        return data.neighborhood.schoolDistrictLocation.name !== undefined ? data.neighborhood.schoolDistrictLocation.name : ""
    }

    getLotDimensions = (data:Property) : string => {
        return `${data.lotDimensions.width}FT X ${data.lotDimensions.depth}FT`
    }
    
    getAmenities = (data:Property) : string => {
        return data.neighborhood.amenities ? data.neighborhood.amenities.map((item)=> item.name).filter(s => s).join(', ') : "N/A"
    }

    getPoolCompatible = (data:Property) : string => {
        return (data.isPoolCompatible ? "IS" : "IS NOT") + " POOL COMPATIBLE"
    }

    getFloorPlanImage = (data: Property, floor:number) : string => {
        return data.floorPlan ? data.floorPlan.images[floor].url : ""
    }
}

const propertyUtil = new PropertyUtil()

export default propertyUtil;
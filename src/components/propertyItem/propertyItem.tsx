import { Property } from "../../models/property";
import utilValidation from "../../utils/validations";
import "./propertyItem.css"
import noImage from "../../assets/no-image.svg"
import floorPlansIcon from "../../assets/floor-plans-icon.svg"
import painbrushIcon from "../../assets/paintbrush-icon.svg"
import Chip from "../chip/chip";
import format from "../../utils/format";

type PropertyItemProp = {
    data: Property;
    selected:boolean;
    onClick? : (property:Property) => void
}




const PropertyItem = (props : PropertyItemProp)=> {


    const getTitleImage = (data: Property) : string =>{
        return data.titleImage !== undefined && data.titleImage.url.length !== 0 && utilValidation.validateUrl(data.titleImage.url) ?
         data.titleImage.url 
         : data.floorPlan !== undefined && data.floorPlan.titleImage !== undefined ? data.floorPlan.titleImage.url : noImage
    }

    const getSquareFootMasonry = (data:Property) : number => {
        return data.floorPlan !== undefined ? data.floorPlan.sqFootMasonry : 0
    }

    const getHouseProperty = (data:Property) : string => {
        return data.houseStyle !== undefined ? data.houseStyle.name.toUpperCase() : ""
    }

    const getBedsProperty = (data:Property) : number => {
        return data.floorPlan !== undefined ? data.floorPlan.bedrooms : 0
    }

    const getBathProperty = (data:Property) : string => {
        return data.floorPlan !== undefined ? data.floorPlan.bathsFull.toString() + "/" + (data.floorPlan.bathsHalf).toString() : ""
    }

    return(
        <>
            <div className={"w-full rounded-md relative aspect-square overflow-hidden shadow-lg shadow-black/70" + (props.selected ? ' border-2 border-primary' : '')} onClick={()=>{
                if(props.onClick){
                    props.onClick(props.data);
                }
            }}>
                <img className="size-full z-0 absolute" src={getTitleImage(props.data)}/>
                <div className="columns-2 gap-0.5 h-auto w-full absolute z-10">
                    <div className="w-full bg-black/20 flex">
                        <img className="size-4 mx-auto" src={floorPlansIcon}/>
                        <p className="ml-2 text-white">{getSquareFootMasonry(props.data)}</p>
                    </div>
                    <div className="w-full bg-black/20 flex content-center">
                        <img className="size-4" src={painbrushIcon}/>
                        <p className="ml-2 text-white">{getHouseProperty(props.data)}</p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black px-4 pb-4 z-10">
                    <Chip value={props.data.constructionStatus}/>
                    
                    <div className="w-full">
                        <p className="text-white font-bold text-3xl">{format.formatPrice(props.data.price)}</p>
                        <p className="text-white font-bold text-sm">{props.data.streetAddress.toUpperCase()}</p>
                        <p className="text-white font-light text-xs">{props.data.neighborhood.name.toUpperCase()}</p>
                        <p className="text-white font-light text-xs">{props.data.neighborhood.city.toUpperCase()}</p>
                    </div>

                    <div className="columns-3 gap-1 h-auto">
                        <div className="w-full rounded flex bg-white/10 py-1 px-2">
                            <p className="font-light text-xs text-white mx-auto"><span className="font-medium">{props.data.sqFootLot}</span> SQFT</p>
                        </div>
                        <div className="w-full rounded flex bg-white/10 py-1 px-2">
                            <p className="font-light text-xs text-white mx-auto"><span className="font-medium">{getBedsProperty(props.data)}</span> BEDS</p>
                        </div>
                        <div className="w-full rounded flex bg-white/10 py-1 px-2">
                            <p className="font-light text-xs text-white mx-auto"><span className="font-medium">{getBathProperty(props.data)}</span> BATHS</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}



export default PropertyItem;
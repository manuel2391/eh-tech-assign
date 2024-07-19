import useGetPropertyDetail from "../../hooks/properties/getPropertyDetailSelected";
import format from "../../utils/format";
import propertyUtil from "../../utils/propertyUtils";
import floorPlansIconBlack from "../../assets/floor-plans-icon-black.svg";
import painbrushIconBlack from "../../assets/paintbrush-icon-black.svg"
import { PrimaryButton, RadioButton, SecondaryButton } from "../../components/button/buttons";
import { useState } from "react";



const PropertyDetail = () => {
    const {propertyDetailSelected} = useGetPropertyDetail()
    const [floorSelected,setFloorSelected] = useState(0);
    console.log(propertyDetailSelected);
    const floors: string[] = ["1ST FLOOR", "2ND FLOOR"]
    const floorOnClick = (floor:string)=> {
        const index = floors.indexOf(floor);
        setFloorSelected(index)
    }


    const BasicInfo = () => {

        if(!propertyDetailSelected){
            return(<></>)
        }

        return(
            <>

                <div className="w-full flex">
                    <div className="w-auto float-left">
                        <p className="text-app-foreground font-bold text-3xl">{format.formatPrice(propertyDetailSelected.price)}</p>
                        <p className="text-app-foreground font-bold text-sm">{propertyDetailSelected.streetAddress.toUpperCase()}</p>
                        <p className="text-app-foreground font-light text-xs">{propertyDetailSelected.neighborhood.name.toUpperCase()}</p>
                        <p className="text-app-foreground font-light text-xs">{propertyDetailSelected.neighborhood.city.toUpperCase()}</p>
                    </div>
                    <div className="w-auto ml-auto text-right">
                        <p className="text-app-foreground-dim font-light text-sm">EST. CLOSING</p>
                        <p className="text-app-foreground-dim font-bold text-lg">{format.formatDate(propertyDetailSelected.estimatedClosingDate).toUpperCase()}</p>
                    </div>
                </div>

            </>
        )
    }


    const PlansBasicInfo = () => {

        if(!propertyDetailSelected){
            return(
                <>
                </>
            )
        }

        return(
            <>
                <div className="w-full mt-2">
                    <hr className="w-full  h-px bg-gray-500" />
                    <div className="w-full flex items-center">
                        <div className="w-2/5 flex ml-auto self-center">
                            <img className="size-4 self-center ml-auto" src={floorPlansIconBlack}/>
                            <p className="ml-2 text-app-foreground mr-auto">{propertyUtil.getFloorPlanName(propertyDetailSelected) + " PLAN"}</p>
                        </div>

                        <hr className="w-px  my-2 mx-auto  h-6 bg-gray-300" />

                        <div className="w-2/5 flex self-center mr-auto">
                            <img className="size-5 self-center ml-auto" src={painbrushIconBlack}/>
                            <p className="ml-2 text-app-foreground mr-auto">{propertyUtil.getHouseProperty(propertyDetailSelected) + " STYLE"}</p>
                        </div>
                    </div>
                    <hr className="w-full  h-px bg-gray-500" />
                </div>
            </>
        )
    }

    const ActionButtons = () => {
        return(
            <>
                <div className="w-full flex gap-4 mt-2">
                    <SecondaryButton text="BOOK a TOUR" onClick={()=>{}}/>
                    <SecondaryButton text="EMAIL SUMMARY" onClick={()=>{}}/>
                </div>
                <div className="w-full mt-2">
                    <PrimaryButton text="RESERVE NOW" onClick={()=>{}}/>
                </div>
            </>
        )
    }


    const ExtraInfo = () => {

        if(!propertyDetailSelected){
            return(
                <>
                </>
            )
        }

        return(
            <>
                <div className="w-full bg-seafoam-green/10 border rounded-md border-gray-300 mt-5">
                    <div className="w-full flex items-center">
                        <div className="w-auto flex-1">
                            <p className="text-center text-app-foreground text-xs">SHCOOL DISTRICT</p>
                            <p className="text-center text-app-foreground text-base font-bold">{propertyUtil.getSchoolDistrictName(propertyDetailSelected).toUpperCase()}</p>
                        </div>
                        <div className="w-auto flex-none">
                            <hr className="w-px  my-2 mx-auto  h-6 bg-gray-300" />
                        </div>
                        <div className="w-auto flex-1">
                            <p className="text-center text-app-foreground text-xs">ELEMENTARY</p>
                            <p className="text-center text-app-foreground text-base font-bold">{propertyUtil.getSchoolDistrictName(propertyDetailSelected).toUpperCase()}</p>
                        </div>
                    </div>

                    <hr className="w-full  h-px bg-gray-500" />

                    <div className="w-full flex items-center">
                        <div className="w-auto flex-1">
                            <p className="text-center text-app-foreground text-xs">LOT DIMENSIONS</p>
                            <p className="text-center text-base text-app-foreground font-bold">{propertyUtil.getLotDimensions(propertyDetailSelected).toUpperCase()}</p>
                        </div>
                        <div className="w-auto flex-none">
                            <hr className="w-px  my-2 mx-auto  h-6 bg-gray-300" />
                        </div>

                        <div className="w-auto flex-1">
                            <p className="text-center text-app-foreground text-xs">LOT SQUARE FOOTAGE</p>
                            <p className="text-center text-base text-app-foreground font-bold">{format.formatNumber(propertyDetailSelected.sqFootLot)}</p>
                        </div>
                    </div>

                    <hr className="w-full  h-px bg-gray-500" />

                    <div className="w-full flex items-center">
                        <div className="w-auto flex-1">
                            <p className="text-center text-app-foreground text-xs">CROSS STREETS</p>
                            <p className="text-center text-base text-app-foreground font-bold">{propertyDetailSelected.neighborhood.intersection.toUpperCase()}</p>
                        </div>
                        <div className="w-auto flex-none">
                            <hr className="w-px  my-2 mx-auto  h-6 bg-gray-300" />
                        </div>

                        <div className="w-auto flex-1">
                            <p className="text-center text-app-foreground text-xs">AMENITIES</p>
                            <p className="text-center text-base text-app-foreground font-bold">{propertyUtil.getAmenities(propertyDetailSelected).toUpperCase()}</p>
                        </div>
                    </div>

                    <hr className="w-full  h-px bg-gray-500" />

                    <div className="w-full flex items-center">
                        <div className="w-auto flex-1">
                            <p className="text-center text-app-foreground text-xs">ADDITIONAL INFO</p>
                            <p className="text-center text-base text-app-foreground font-bold">{propertyUtil.getPoolCompatible(propertyDetailSelected).toUpperCase()}</p>
                        </div>
                    </div>
                </div>
            
            </>
        )
    }

    if(propertyDetailSelected){
        return(
            <>
                <div className="w-full overflow-hidden ">
                    <img className="w-full" src={propertyUtil.getTitleImage(propertyDetailSelected)}/>
                    <div className="w-11/12  -mt-8 p-6 relative mx-auto  bg-white rounded-xl shadow-lg shadow-black/70">
                        <BasicInfo/>
                        <PlansBasicInfo/>
                        <ActionButtons/>
                        <ExtraInfo/>
                    </div>

                    <div className="w-full mt-10">
                        <p className="text-nowrap text-2xl font-medium text-center">{propertyUtil.getFloorPlanName(propertyDetailSelected)}</p>
                    </div>

                    <div className="w-full items-center">
                        <img  src={propertyUtil.getFloorPlanImage(propertyDetailSelected,floorSelected)}  />
                        <div className="w-min mx-auto self-center">
                            <RadioButton texts={floors} onClick={(text)=>{floorOnClick(text)}} />
                        </div>
                    </div>


                </div>   
            </>
        )
    }
    
}

export default PropertyDetail;
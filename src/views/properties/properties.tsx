
import { useEffect, useState } from "react";
import Search from "../../components/search/search";
import "./properties.css"
import useGetProperties from "../../hooks/properties/getProperties";
import { Property } from "../../models/property";
import PropertyItem from "../../components/propertyItem/propertyItem";
import useWindow from "../../utils/window";


const Properties = ()=> {
    const {data} = useGetProperties(); 
    const [propertiesFiltered,setPropertiesFiltered] = useState<Property[]>([]);
    const [propertySelected,setPropertySelected] = useState<Property | undefined>(undefined);
    const windowDimensions = useWindow();
    useEffect(()=>{
        if(data != undefined){
            setPropertiesFiltered(data)
        }
        
    },[data])
    
    const [searchValue,setSearchValue] = useState("")
    
    const onSearch = (value: string): void => {
        setSearchValue(value)

    }

    const onPropertyClick = (property:Property) : void =>{
        if(windowDimensions.isMobile()){
            console.log("is mobile")
        }
        setPropertySelected(property);
    }

    return(
        <>
            <div className={""}>
                <div className="search-container w-full">
                    <Search onSearch={onSearch} value={searchValue} placeholder=""/>
                </div>
                <div className="item-container w-full grid grid-cols-1 gap-4 md:grid-cols-4">
                    {
                        propertiesFiltered.map((property)=> 
                            <PropertyItem 
                                key={property.streetAddress}
                                data={property} 
                                selected={property.streetAddress == propertySelected?.streetAddress}
                                onClick={onPropertyClick}
                            />
                        )
                    }
                </div>
                
            </div>

        </>
    )
}

export default Properties;
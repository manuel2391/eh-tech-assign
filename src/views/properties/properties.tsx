
import { useEffect, useState } from "react";
import Search from "../../components/search/search";
import "./properties.css"
import useGetProperties from "../../hooks/properties/getProperties";
import { Property } from "../../models/property";
import PropertyItem from "../../components/propertyItem/propertyItem";
import useWindow from "../../utils/window";
import useGetPropertyDetail from "../../hooks/properties/getPropertyDetailSelected";
import PropertyDetail from "../propertyDetail/propertyDetail";


const Properties = ()=> {
    const {propertyDetailSelected,setPropertyDetailSelected} = useGetPropertyDetail()
    const {data} = useGetProperties(); 
    const [propertiesFiltered,setPropertiesFiltered] = useState<Property[]>([]);
    const [showDetail,setShowDetail] = useState(false);
    const windowDimensions = useWindow();
    useEffect(()=>{
        if(data != undefined){
            setPropertiesFiltered(data)
        }
        
    },[data])
    
    const [searchValue,setSearchValue] = useState("")
    
    const onSearch = (value: string): void => {
        setSearchValue(value)
        if(data && data.length > 0){
            if(value.length >= 3){
                const dataFiltered = data.filter((item)=>{
                    return propertyFilter(item,value)
                });
                setPropertiesFiltered(dataFiltered);
            }else {
                setPropertiesFiltered(data); 
            }  
        }
        
    }

    const propertyFilter = (property : Property, text: string) : boolean => {
        let flag = false;
        
        if(!flag && property.streetAddress.toLowerCase().includes(text)){
            flag = true;
        }

        if(!flag && property.neighborhood.name.toLowerCase().includes(text)){
            flag = true;
        }

        if(!flag && property.neighborhood.city.toLowerCase().includes(text)){
            flag = true;
        }

        if(!flag && property.floorPlan && property.floorPlan.name.toLowerCase().includes(text)){
            flag = true;
        }

        return flag;
    }

    const onPropertyClick = (property:Property) : void =>{
        if(property.streetAddress == propertyDetailSelected?.streetAddress){
            setPropertyDetailSelected(undefined);
            if(windowDimensions.isMobile()){
                console.log("is mobile")
            }else {
                setShowDetail(false)
            }

            

        } else {
            setPropertyDetailSelected(property);
            if(windowDimensions.isMobile()){
                console.log("is mobile")
            }else {
                setShowDetail(true)
            }
        }
        
    }

    return(
        <>
            <div className="w-full flex gap-4">
                <div className={showDetail ? 'w-1/2' : 'w-full' + " "}>
                    <div className="search-container w-full">
                        <Search onSearch={onSearch} value={searchValue} placeholder="Search by Street, Neighborhood, City, Floor Plan"/>
                    </div>
                    <div className={"item-container w-full grid grid-cols-1 gap-4" + (showDetail ? ' md:grid-cols-2' : ' md:grid-cols-4')}>
                        {
                            propertiesFiltered.map((property)=> 
                                <PropertyItem 
                                    key={property.streetAddress}
                                    data={property} 
                                    selected={property.streetAddress == propertyDetailSelected?.streetAddress}
                                    onClick={onPropertyClick}
                                />
                            )
                        }
                    </div>
                    
                </div>
                <div className={showDetail ? 'w-1/2 ' : 'hidden'} >
                    <PropertyDetail/>
                </div>
            </div>
           

        </>
    )
}

export default Properties;
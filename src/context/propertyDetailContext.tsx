import React, { createContext, PropsWithChildren, useMemo, useState } from "react"
import { Property } from "../models/property"

export type IPropertyDetailContext = {
    propertyDetailSelected ? : Property ,
    setPropertyDetailSelected : React.Dispatch<React.SetStateAction<IPropertyDetailContext['propertyDetailSelected']>> 
}

export const PropertyDetailContext = createContext<IPropertyDetailContext | undefined >(undefined);

const PropertyDetailProvider = ({children} : PropsWithChildren) => {
    const [propertyDetailSelected, setPropertyDetailSelected] = useState<IPropertyDetailContext['propertyDetailSelected']>();
    const value = useMemo(() => ({propertyDetailSelected, setPropertyDetailSelected}),[propertyDetailSelected]);
    return(
        <PropertyDetailContext.Provider value={value}>
            {children}
        </PropertyDetailContext.Provider>
    )

}

export default PropertyDetailProvider;
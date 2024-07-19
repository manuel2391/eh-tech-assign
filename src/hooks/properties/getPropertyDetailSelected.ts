import { useContext } from "react";
import { PropertyDetailContext } from "../../context/propertyDetailContext";

const useGetPropertyDetail = () => {
    const context = useContext(PropertyDetailContext);
    if (!context) {
        throw new Error("useGetPropertyDetail must be used inside the PropertyDetailSelectedProvider");
      }
    return context;
}

export default useGetPropertyDetail;
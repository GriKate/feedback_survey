import { useEffect } from "react";
import { useNavigate } from "react-router";


export const CheckRoutes = ({ data }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (data.rating !== null) {
            navigate("/questions");
        }
    }, [])
    
}
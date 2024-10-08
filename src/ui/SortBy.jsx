import Select from "./Select";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";


function SortBy({ options }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get("sortBy") || "";
    
    function handleChange(e) {
      searchParams.set("sortBy", e.target.value);
      setSearchParams(searchParams);  
    }

    return (
        <Select 
          options={options} 
          type="white" 
          value={sortBy} 
          onChange={handleChange} 
          />
    )
}


SortBy.propTypes = {
    options: PropTypes.array.isRequired
}

export default SortBy;













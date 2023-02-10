import {Autocomplete} from "@mui/material";
import'./SearchBar.css';
import SearchIcon from'@mui/icons-material/Search';


export default function SearchBar({data,placeholder}){
    return(
        <div className ="search">
            <div className="searchInput">
                <Autocomplete
                    id="custom-input-demo"
                    options={data}
                    getOptionLabel={(opt)=>opt.title}
                    renderInput={(params)=>(
                        <div ref={params.InputProps.ref}>
                            <input type="text"{...params.inputProps} placeholder={placeholder} autoFocus='true' />
                        </div>
                    )}
                    >
                </Autocomplete>
                <div className="searchIcon">
                    <SearchIcon>

                    </SearchIcon>
                </div>
            </div>
        </div>
        
    )
}
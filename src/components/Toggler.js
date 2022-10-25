import {useDispatch, useSelector} from "react-redux";
import {Checkbox} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";

const Toggler = () => {
    const isChecked = useSelector(state => state),
        dispatch = useDispatch()

    return (
        <>
            <Checkbox value={isChecked} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={() => {
                dispatch({type: 'SWITCH_TOGGLE'})
            }}/>
        </>
    )
}

export default Toggler

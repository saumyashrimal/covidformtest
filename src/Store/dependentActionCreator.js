



const setdno = (dno) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"setdno",
                payload:dno
            }
        )
        
    }
}



const setdName = (name) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"setdName",
                payload:name
            }
        )
        
    }
}

const setdAge = (age) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"setdAge",
                payload:age
            }
        )
        
    }
}

const setdDob = (dob) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"setdDob",
                payload:dob
            }
        )
        
    }
}

const setdGender = (gender) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"setdGender",
                payload:gender
            }
        )
        
    }
}

const setdPlace = (place) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"setdPlace",
                payload:place
            }
        )
        
    }
}

const setdAdhaarno = (adhaarno) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"setdAdhaarno",
                payload:adhaarno
            }
        )
        
    }
}

const setRelation = (relation) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"setRelation",
                payload:relation
            }
        )
        
    }
}

const Reset = () => {
    return(dispatch)=>{
        dispatch(
            {
                type:"Reset"
            }
        )
        
    }
}



export default {setdno,setdName , setdAge , setdDob , setdGender , setdPlace  , setdAdhaarno , setRelation,Reset}



const setName = (name) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"setName",
                payload:name
            }
        )
        
    }
}

const setAge = (age) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"setAge",
                payload:age
            }
        )
        
    }
}

const setDob = (dob) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"setDob",
                payload:dob
            }
        )
        
    }
}

const setGender = (gender) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"setGender",
                payload:gender
            }
        )
        
    }
}

const setPlace = (place) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"setPlace",
                payload:place
            }
        )
        
    }
}

const setAdhaarno = (adhaarno) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"setAdhaarno",
                payload:adhaarno
            }
        )
        
    }
}
const setMobileno = (mobileno) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"setMobileno",
                payload:mobileno
            }
        )
        
    }
}
const setEmail = (email) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"setEmail",
                payload:email
            }
        )
        
    }
}

const setDependent = (dependent) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"setDependent",
                payload:dependent
            }
        )
        
    }
}

const deleteDependent = (dependent) => {
    return(dispatch)=>{
        dispatch(
            {
                type:"deleteDependent",
                payload:dependent
            }
        )
        
    }
}


export default {setName , setAge , setDob , setGender , setPlace  , setAdhaarno,setMobileno,setEmail,setDependent,deleteDependent}

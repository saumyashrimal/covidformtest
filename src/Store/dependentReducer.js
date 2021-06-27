let initialState = {
     name: "", age: "", dob: '', gender: '', place: "", adhaarno: "", relation: "",dno:""
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case "setdno":
            return { ...state, dno: action.payload };

        case "setdName":
            return { ...state, name: action.payload };
        case "setdAge":
            return { ...state, age: action.payload };

        case "setdDob":
            return { ...state, dob: action.payload };

        case "setdGender":
            return { ...state, gender: action.payload };

        case "setdPlace":
            return { ...state, place: action.payload };

        case "setdAdhaarno":
            return { ...state, adhaarno: action.payload };

        case "setRelation":
            return { ...state, relation: action.payload };

        case "Reset":
            return {...initialState};

        default:
            return state;
    }
}


export default Reducer;
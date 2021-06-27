let initialState = {
    name: "", age: "", dob: '', gender: '', place: "", pincode: "", adhaarno: "", mobileno: "", email: "",
    dependents: []
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "setName":
            return { ...state, name: action.payload };
        case "setAge":
            return { ...state, age: action.payload };

        case "setDob":
            return { ...state, dob: action.payload };

        case "setGender":
            return { ...state, gender: action.payload };

        case "setPlace":
            return { ...state, place: action.payload };

        case "setAdhaarno":
            return { ...state, adhaarno: action.payload };

        case "setMobileno":
            return { ...state, mobileno: action.payload };

        case "setEmail":
            return { ...state, email: action.payload };

        case "setDependent":
            return { ...state, dependents: [...state.dependents, action.payload] };

        case "deleteDependent":
            state.dependents.forEach((dependentObj, ind) => {
                if (dependentObj.dno === action.payload.dno) {
                    console.log("state obj before slice ",state.dependents)
                    state.dependents = [...state.dependents.slice(0, ind), ...state.dependents.slice(ind + 1)];
                    console.log("state obj after slice ",state.dependents)
                }
            })
            return state

        default:
            return state;
    }
}


export default Reducer;
import {useState,useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';

import dependentActionCreator from '../Store/dependentActionCreator';

import { bindActionCreators } from 'redux';

 

function Dependents(props) {

 

    let StoreObj = useSelector((store) => store);

    const dispatch = useDispatch();

    let initialerrstate = {name:"",age:"",dob:"",gender:"",place:"",relation:"",adhaarno:""};

 

    let [dependentErrState , setDependentErrState] = useState(initialerrstate);

 

    const {setdName, setdAge, setdDob, setdGender, setdPlace, setdAdhaarno, setRelation ,Reset,setdno} = bindActionCreators(dependentActionCreator, dispatch);

 

    let handleGenderchange = (e, gender) => {

        e.preventDefault();

        console.log(gender)

        setdGender(gender);

    }

    let relations = ["father", "mother", "spouse", "son", "daughter"];

    useEffect(()=>{

        setdno(props.dependentno);

    },[])

 

    

 

    let handleAddDependent = (e) => {

        e.preventDefault();

 

        console.log("store obj inside add dependent = ", StoreObj.dependentState);

 

        setDependentErrState(initialerrstate);

 

        // check adhaar for dependent for should be 12 digits

 

        let adhaarcheck =  StoreObj.dependentState.adhaarno.match(/^[0-9]{12,12}$/g)

 

        if(StoreObj.dependentState.name === ""){

            setDependentErrState((errState) => {

                errState = {...errState,name:"name required"}

                return errState;

            })

        }

        else if(StoreObj.dependentState.adhaarno === ""){

            setDependentErrState((errState) => {

                errState = {...errState,adhaarno:"Adhaar no required"}

                return errState;

            })

        }

        else if(adhaarcheck === null){

            setDependentErrState((errState) => {

                errState = {...errState,adhaarno:"should be 12 digits"}

                return errState;

            })

        }

        else if(StoreObj.dependentState.relation === ""){

            setDependentErrState((errState) => {

                errState = {...errState,relation:"choose relation"}

                return errState;

            })

        }

 

        else if(StoreObj.dependentState.age === ""){

            setDependentErrState((errState) => {

                errState = {...errState , age:"age is required"}

                return errState;

            })

        }

 

        else if(StoreObj.dependentState.dob === ""){

            setDependentErrState((errState) => {

                errState = {...errState , age:"DOB is required"}

                return errState;

            })

        }

 

        

        else if(StoreObj.dependentState.gender === ""){

            setDependentErrState((errState) => {

                errState = {...errState , gender: "gender is required"}

                return errState;

            })

        }

 

        else if(StoreObj.dependentState.place === ""){

            setDependentErrState((errState) => {

                errState = {...errState , place: "place is required"}

                return errState;

            })

        }

 

        else{

            console.log("store obj",StoreObj.dependentState);

            props.setDependent(StoreObj.dependentState);

            Reset();

        }

       

 

    }

 

    return (

        <form className="w-100 mx-auto p-5 mt-3 mb-5">

            <h5>Dependents {props.dependentno}</h5>

 

            <select className="form-select mb-3" id="relation"

                value={StoreObj.dependentState.relation}

                onChange={e => setRelation(e.target.value)}

                required>

                {relations.map((rel, key) => {

                    return (

                        <option key={key} value={rel}>{rel}</option>

                    );

                })}

            </select>

            {dependentErrState.relation && <p className="text-danger">{dependentErrState.relation}</p> }

 

            {/* input field for Name */}

            <input type="text" id="name" placeholder="Name..." className="form-control mb-3"

                value={StoreObj.dependentState.name}

                onChange={e => setdName(e.target.value)}

                autoComplete="off"

                required

            />

            {dependentErrState.name && <p className="text-danger">{dependentErrState.name}</p> }




            {/* input field for dob */}

            <input type="date" name="dob" placeholder="Date of birth..." id="dob" className="form-control mb-3"

                autoComplete="off"

                value={StoreObj.dependentState.dob}

                onChange={e => setdDob(e.target.value)}

                required

            />

            {dependentErrState.dob && <p className="text-danger">{dependentErrState.dob}</p> }

 

            {/* input field for age  */}

            <input type="number" name="age" placeholder="Age..." id="age" className="form-control mb-3"

                value={StoreObj.dependentState.age}

                autoComplete="off"

                onChange={e => setdAge(e.target.value)}

                required

            />

            {dependentErrState.age && <p className="text-danger">{dependentErrState.age}</p> }

 

            {/* radio button for gender */}

 

            <div className="d-flex mb-3">

                <div className="form-check me-3">

                    <input type="radio" name="gender" id="male" className="form-check-input" value="male" onChange={(e) => handleGenderchange(e, e.target.value)} />

                    <label htmlFor="male" className="form-check-label">Male</label>

                </div>

 

                <div className="form-check">

                    <input type="radio" name="gender" id="female" className="form-check-input" value="female" onChange={(e) => handleGenderchange(e, e.target.value)} />

                    <label htmlFor="female" className="form-check-label">Female</label>

                </div>

            </div>

            {dependentErrState.gender && <p className="text-danger">{dependentErrState.gender}</p> }




            {/* input field for place/city */}

            <input type="text" id="city" placeholder="city..." className="form-control mb-3"

                value={StoreObj.dependentState.place}

                onChange={e => setdPlace(e.target.value)}

                autoComplete="off"

                required

            />

            {dependentErrState.place && <p className="text-danger">{dependentErrState.place}</p> }

 

            {/* input field for adhaar no */}

            <input type="text" id="adhaarno" placeholder="adhaar..." className="form-control mb-3"

                value={StoreObj.dependentState.adhaarno}

                onChange={e => setdAdhaarno(e.target.value)}

                autoComplete="off"

                required

            />

            {dependentErrState.adhaarno && <p className="text-danger">{dependentErrState.adhaarno}</p> }

 

            <button className="btn btn-primary" onClick={handleAddDependent}>Add</button>

 

            <hr className="solid"/>

 

        </form>

    );

 

}

 

export default Dependents
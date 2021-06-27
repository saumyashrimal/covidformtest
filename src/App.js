import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import inputActionCreator from './Store/inputActionCreator';
import { bindActionCreators } from 'redux';
import Dependent from './Components/Dependents';
import SavedDependents from './Components/SavedDependents'
import axios from 'axios';
import { saveAs } from 'file-saver';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'



function App() {



  let StoreObj = useSelector((store) => store);
  let [dependentcount, setDependentCount] = useState(StoreObj.inputstate.dependents.length);

  let [addDependentDisable, setAddDependentDisable] = useState([]);
  const dispatch = useDispatch();
  const { setName, setAge, setDob, setGender, setPlace, setAdhaarno, setMobileno, setEmail, setDependent, deleteDependent } = bindActionCreators(inputActionCreator, dispatch);

  let primaryErrInitialState = { adhaarnoerr: "", mobilenoErr: "" }

  let [primaryErrState, setPrimaryErrState] = useState(primaryErrInitialState)




  let handleFormSubmit = (e) => {
    e.preventDefault();
    setPrimaryErrState(primaryErrInitialState);
    let adhaarcheck = StoreObj.inputstate.adhaarno.match(/^[0-9]{12,12}$/g)
    let mobilenocheck = StoreObj.inputstate.mobileno.match(/^[0-9]{10,10}$/g)
    if (adhaarcheck === null) {

      setPrimaryErrState((errState) => {

        errState = { ...errState, adhaarno: "adhaar no should be of 12 digits" }

        return errState;

      })

    }
    else if (mobilenocheck === null) {

      setPrimaryErrState((errState) => {

        errState = { ...errState, mobileno: "mobile no should be of 10 digits" }

        return errState;

      })

    }
    else {

      console.log(StoreObj.inputstate);

      axios.post('/create-pdf', StoreObj.inputstate)

        .then(() => axios.get("/fetch-pdf", { responseType: 'blob' }))

        .then(res => {

          const pdfBlob = new Blob([res.data], { type: "application/pdf" })

          saveAs(pdfBlob, "newpdf")

        })

    }



  }



  let handleGenderchange = (e, gender) => {

    e.preventDefault();

    console.log(gender)

    setGender(gender);

  }



  let handleDependentClick = (e) => {

    e.preventDefault();

    if (dependentcount < 4) {

      setDependentCount(dependentcount + 1);

    }

    else (

      alert("only 4 dependents allowed")

    )




  }



  useEffect(() => {

    console.log("store obj after dependent add", StoreObj.inputstate);
    if ((dependentcount - StoreObj.inputstate.dependents.length) > 0) {
      setAddDependentDisable(true);
    }
    else {
      setAddDependentDisable(false);
    }
  }, [StoreObj.inputstate.dependents, dependentcount])



  //update the dependent details

  // let editDependent = (dependentObj) => {

  //   setDependentCount(dependentcount + 1);



  // }



  //delete the dependent details

  let deleteSavedDependent = (e, dependentObj) => {
    e.preventDefault();
    deleteDependent(dependentObj);
    setDependentCount(dependentcount - 1);
  }



  return (

    <form className="w-75 mx-auto p-5 mt-3 mb-5" onSubmit={handleFormSubmit}>
      <h1>Covid Registration Form</h1>
      {/* input field for Name */}

      <input type="text" id="name" placeholder="Name..." className="form-control mb-3"
        value={StoreObj.inputstate.name}
        onChange={e => setName(e.target.value)}
        autoComplete="off"
        required

      />




      {/* input field for dob */}

      <input type="date" name="dob" placeholder="Date of birth..." id="dob" className="form-control mb-3"

        autoComplete="off"
        value={StoreObj.inputstate.dob}
        onChange={e => setDob(e.target.value)}
        required

      />



      {/* input field for age  */}

      <input type="number" name="age" placeholder="Age..." id="age" className="form-control mb-3"
        value={StoreObj.inputstate.age}
        autoComplete="off"
        onChange={e => setAge(e.target.value)}
        required

      />



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





      {/* input field for place/city */}

      <input type="text" id="city" placeholder="city..." className="form-control mb-3"

        value={StoreObj.inputstate.place}

        onChange={e => setPlace(e.target.value)}

        autoComplete="off"

        required

      />



      {/* input field for adhaar no */}

      <input type="text" id="adhaarno" placeholder="adhaar..." className="form-control mb-3"

        value={StoreObj.inputstate.adhaarno}

        onChange={e => setAdhaarno(e.target.value)}

        autoComplete="off"

        required

      />

      {primaryErrState.adhaarno && <p className="text-danger">{primaryErrState.adhaarno}</p>}



      {/* input field for adhaar no */}

      <input type="text" id="mobileno" placeholder="Mobile no..." className="form-control mb-3"

        value={StoreObj.inputstate.mobileno}

        onChange={e => setMobileno(e.target.value)}

        autoComplete="off"

        required

      />

      {primaryErrState.mobileno && <p className="text-danger">{primaryErrState.mobileno}</p>}



      {/* input field for adhaar no */}

      <input type="email" id="email" placeholder="Email..." className="form-control mb-3"

        value={StoreObj.inputstate.email}

        onChange={e => setEmail(e.target.value)}

        autoComplete="off"

        required

      />




      <p className="text-danger mt-4">Note : only 4 dependents can be added</p>

      {/* button to add dependent */}



      <button className="p-2 btn btn-primary d-block m-1" disabled={addDependentDisable} onClick={handleDependentClick}>Add Dependent</button>




      {

        (dependentcount - StoreObj.inputstate.dependents.length) > 0 && <Dependent dependentno={dependentcount} setDependent={setDependent} />

      }



      {

        StoreObj.inputstate.dependents.length > 0 && <SavedDependents dependents={StoreObj.inputstate.dependents} deleteSavedDependent={deleteSavedDependent} />

      }



      <button type="submit" className="btn btn-success d-block text-center mt-4 me-1 mb-3">Submit</button>



    </form>

  );

}



export default App;
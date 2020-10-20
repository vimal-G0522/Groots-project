import React,{useState,useEffect} from 'react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { SketchPicker } from 'react-color'
import {create} from './api'

const Routes=()=>{

    const [values,setValues]=useState({
        name:"",
        email:"",
        cgpa:"",
        photo:"",
        color:"",
        time:"",
        age:"",
        country:"",
        gender:"",
        site:"",
        err:"",
        male:"male",
        female:"female",
        other:"others"
    })

    
    const [startDate, setStartDate] = useState(new Date());

    const {name,email,cgpa,photo,color,time,age,country,gender,site,err,male,female,other}=values

    const handlechange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };

    const onsubmit=event=>{
        event.preventDefault()
        console.log('submit')
        setValues({...values,err:false})
        console.log(values)
        create(values).then(
            data=>{
                if(data.error){
                    setValues({...values,err:data.error})
                }
            }
        ).catch(err=>console.log(err))

    }


    return (
        <div className="container">
        <h1 className="pt-2">Grootan Test</h1>
        <h3 className="p-2">Round 2</h3>
        <form className="form-group">
         <div className="row">
        <div className="col-2">
          <h5 className=" my-1">Name:-</h5></div>
          <div className="col">
        <input type="text" className="form-control" onChange={handlechange("name")}  value={name} autoFocus require placeholder="Name"/>
        </div></div>
        <div className="row my-3">
        <div className="col-2">
          <h5 className=" my-1">Age:-</h5></div>
          <div className="col">
        <input type="text" className="form-control" onChange={handlechange("age")}  value={age} autoFocus require placeholder="Age"/>
        </div></div>
        <div className="row my-3">
        <div className="col-2">
          <h5 className=" my-1">Country:-</h5></div>
          <div className="col">
        <input type="text" className="form-control "  onChange={handlechange("country")} value={country} autoFocus require placeholder="Country"/>
        </div></div>
        <div className="row my-3">
        <div className="col-2">
          <h5 className=" my-1">Date of birth:-</h5></div>
          <div className="col">

          <DatePicker className="pl-3"  onChange={date => setStartDate(date)} selected={startDate} autoFocus/>          
      </div></div>
      <div className="row my-3">
        <div className="col-2">
          <h5 className=" my-1">Gender:-</h5></div>
          <div className="col">
          <input type="radio" id="male" name="gender" value="male" onChange={handlechange("gender")}  value={male} />
<label for="male" className="pr-3" >Male</label>
<input type="radio" id="female" name="gender" value="female" onChange={handlechange("gender")}  value={female}/>
<label for="female" className="pr-3">Female</label>
<input type="radio" id="other" name="gender" value="other" onChange={handlechange("gender")}  value={other}/>
<label for="other" >Other</label>

        </div></div>
        <div className="row my-3">
        <div className="col-2">
          <h5 className=" my-1">Favourite Color:-</h5></div>
          <div className="col">
        <input type="text" className="form-control " onChange={handlechange("color")}  value={color}  autoFocus require placeholder="Favourite color code"/>

        </div></div>
        <div className="row my-3">
        <div className="col-2">
          <h5 className=" my-1">Website Address:-</h5></div>
          <div className="col">
        <input type="text" className="form-control "  onChange={handlechange("site")}  value={site} autoFocus require placeholder="WebSite Address"/>

        </div></div>
        <div className="row my-3">
        <div className="col-2">
        <label for="appt" className="text-lg-left font-weight-bold ">Select a time:</label></div>
        <div className="col">
        <input type="time" id="appt" name="appt"onChange={handlechange("time")}  value={time} />
        </div></div>
        <div className="row my-3">
        <div className="col-2">
        <h5 className=" my-1">Select photo:-</h5></div>
        <div className="col">
        <input type="file" id="myFile" name="filename"  onChange={handlechange("photo")}  value={photo} />

        </div></div>
        <div className="row my-3">
        <div className="col-2">
        <h5 className=" my-1">Cgpa:-</h5></div>
        <div className="col">
        <input type="text" className="form-control "  onChange={handlechange("cgpa")}  value={cgpa} autoFocus require placeholder="Cgpa"/>

        </div></div>
  <input type="submit" onClick={onsubmit} className="btn btn-primary"/>
        </form>
        </div>
    )

}
export default Routes
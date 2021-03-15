import React, { Fragment, useEffect, useState } from 'react'

import axios from 'axios'
import swal from 'sweetalert';
import Lists from './Lists';


const Form = () => {
//    state manage using hooks es6
    const [users, setUsers] = useState(
        {
            name:"",
            email:"",
            phone:"",
            address:"", 
            companyName:"",
        }
    );

    const handleInputChange = event =>{
        const{name, value} = event.target;
        setUsers({ ...users, [name]: value });
    }
    // useEffect(() => {
    //     loadUsers();
    // }, []);
    console.log('users', users)
    return (
        <Fragment>
            <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
                {/* <div class="row">
                    <ol class="breadcrumb">
                        <li><a href="#">
                            <em class="fa fa-home"></em>
                        </a></li>
                        <li class="active">Add users</li>
                    </ol>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">Add</h1>
                    </div>
                </div> */}
                <form 
                    onSubmit={event =>{
                        event.preventDefault();
                        if (!users.name || !users.email ) return;
                            console.log(users)
                            axios.post('http://localhost:8765/api/users.json', users)
                              .then((response) => {
                                // console.log(response);
                                swal("Successfully Created ")
                                .then(() => {
                                    window.location.reload();
                                })
                              }, (error) => {
                                console.log(error.response);
                              });

                    }}
                >
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Name</label>
                            <input type="name" className="form-control" value={users.name} name="name" required='' id="inputEmail4" placeholder="Name" onChange={handleInputChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" value={users.email} name="email" required='' id="inputEmail4" placeholder="Email" onChange={handleInputChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Phone</label>
                            <input type="phone" className="form-control" name="phone" required='' value={users.phone} id="inputPassword4" placeholder="Phone" onChange={handleInputChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Address</label>
                            <input type="text" className="form-control" required='' value={users.address} name="address" id="inputPassword4" placeholder="companyName" onChange={handleInputChange}/>
                        </div>
                        
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddress">Company Name</label>
                        <input type="text" className="form-control" required='' name="companyName" value={users.companyName} id="inputAddress" placeholder="1234 Main St" onChange={handleInputChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>

            {/* Lists component is called from previous component */}
                        <Lists/>

                        {/* list end */}
        </Fragment>
    )
}

export default Form
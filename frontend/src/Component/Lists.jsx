import React, { Fragment, useEffect, useState } from "react";


import axios from "axios";


const Lists = () => {
	const [users, setUser] = useState([]);
	

	useEffect(() => {
		axios
        // api calls
			.get('http://localhost:8765/api/users.json')  
			.then((res) => {
				let { data } = res.data;
				console.log(data);

				setUser(data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<Fragment>
			<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
				<div class="row">
					<ol class="breadcrumb">
						<li>
							<a href="#">
								<em class="fa fa-home"></em>
							</a>
						</li>
						<li class="active">List of Sales</li>
					</ol>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<h1 class="page-header">Lists</h1>
					</div>
				</div>
				
				<table
					id="dtBasicExample"
					class="table table-striped table-bordered table-sm "
					cellspacing="0"
					width="100%"
				>
					<thead>
						<tr style={{ backgroundColor: "#30a5ff" }}>
							<th>Id</th>
                            <th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Address</th>
							<th>CompanyName</th>
						</tr>
					</thead>
                        {/* mapping data from api call */}
					<tbody>
						{users.length > 0 ? (
							users.map((user) => (
								<tr key={user.id}>
									<td>{user.id}</td>
                                    <td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
									<td>{user.address}</td>
                                    <td>{user.companyName}</td>
									<td>
										<img src={user.avatar} width="100px" height="100px" />
									</td>
									
								</tr>
							))
						) : (
							<tr>
								<td colSpan={3}>No users</td>
							</tr>
						)}
					</tbody>
				</table>

			
				
				<div></div>
			</div>
		</Fragment>
	);
};

export default Lists;

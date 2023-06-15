// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
//
// const MyComponent = () => {
// 	const [data, setData] = useState([]);
//
// 	useEffect(() => {
// 		todaySalesCount(); // Call the function to fetch backend data
// 	}, []);
//
// 	const todaySalesCount = async () => {
// 		try {
// 			const response = await axios.post(
// 				'application/controllers/admin/Dashboard2.php/getSalesCountDateWiseAjaxNew', // Replace with your backend API endpoint URL
// 				{
// 					fromDate: 'your_start_date',
// 					toDate: 'your_end_date',
// 				}
// 			);
// 			setData(response.data.sales);
// 		} catch (error) {
// 			console.error('Error fetching data:', error);
// 		}
// 	};
//
// 	const getInitials = (name) => {
// 		const initials = name
// 			.split(' ')
// 			.map((part) => part.charAt(0))
// 			.join('')
// 			.toUpperCase();
// 		return initials;
// 	};
//
// 	return (
// 		<div className="table-responsive">
// 			<table className="table table-centered table-borderless table-hover w-100 dt-responsive nowrap">
// 				<thead className="text-body fw-semibold">
// 				<tr>
// 					<th>Executives</th>
// 					<th>Subs_Count</th>
// 					<th>Revenue</th>
// 					<th>Bonus</th>
// 				</tr>
// 				</thead>
// 				<tbody>
// 				{data.map((elem, idx) => (
// 					<tr key={idx}>
// 						<td className="profile-data">
// 							{elem.Executive_Pic === 'place_holder.png' ||
// 							elem.Executive_Pic === '' ||
// 							typeof elem.Executive_Pic === 'undefined' ? (
// 								<div className="profile-pic-alt">
// 									{getInitials(elem.E_Name)}
// 								</div>
// 							) : (
// 								<img
// 									src={`${process.env.PUBLIC_URL}/assets/images/admin/${elem.Executive_Pic}`}
// 									alt="Profile Pic"
// 									className="profile-pic"
// 									style={{ height: '38px', borderRadius: '50%' }}
// 								/>
// 							)}
// 							<div className="profile-name">{elem.E_Name}</div>
// 						</td>
// 						<td>{elem.Overall_Count}</td>
// 						<td>{Number(elem.Overall_Revenue).toFixed(2)}</td>
// 						<td>{Number(elem.Inc).toFixed(2)}</td>
// 					</tr>
// 				))}
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// };
//
// export default MyComponent;

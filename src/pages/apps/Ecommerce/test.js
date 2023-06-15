import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Table from '../../../components/Table';
import PageTitle from '../../../components/PageTitle';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'daterangepicker/daterangepicker.css';
import $ from 'jquery';
import 'daterangepicker';
const baseURL = 'http://example.com'; // Define the base URL here

const Customers = (): React$Element<React$FragmentType> => {
  const [data, setData] = useState(null);
  const [dateRange, setDateRange] = useState({
    startDate: moment().subtract(29, 'days'),
    endDate: moment(),
  });

  useEffect(() => {
    fetchData();
  }, [dateRange]);

	const fetchData = () => {
		const { startDate, endDate } = dateRange;
		const fromDate = startDate.format('MMMM D, YYYY');
		const toDate = endDate.format('MMMM D, YYYY');

		console.log('fromDate:', fromDate);
		console.log('toDate:', toDate);

		fetch(`http://stickynotelocal.in/index.php/dashboard4/getSalesCountDateWiseAjaxNew/?fromDate=${fromDate}&toDate=${toDate}`)
			.then(response => response.json())
			.then(data => {
				setData(data);
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});
	};

	const handleDateRangeChange = (start, end) => {
    setDateRange({ startDate: start, endDate: end });
  };

  const NameColumn = ({ row }) => {
    return (
        <div >

        </div>
    );
};

  const columns = [
	  {
		  Header: 'Executives',
		  accessor: 'E_Name',
		  sort: true,
		  Cell: ({ row }) => (
			  <div className="table-user">
				  <img
					  src={'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'}
					  alt="Profile Pic"
					  className="me-2 rounded-circle"
					  style={{ height: '38px', borderRadius: '50%' }}
				  />
				  <Link to="#" className="text-body fw-semibold">
					  {row.original.E_Name}
				  </Link>
			  </div>
		  ),
		  Footer: 'Total',
	  },
    
    {
      Header: 'Count',
      accessor: 'Overall_Count',
      sort: true,
      Footer: ({ data }) => {
        const total = data.reduce((sum, row) => sum + (row.count || 0), 0);
        return <div>{total}</div>;
      },
    },
    {
      Header: 'Revenue',
      accessor: 'Overall_Revenue',
      sort: true,
      Cell: ({ value }) => {
        const formattedValue = parseFloat(value).toFixed(2);
        return <span>{formattedValue}</span>;
      },
      Footer: ({ data }) => {
        const total = data.reduce((sum, row) => sum + (row.Revenue || 0), 0);
        const formattedTotal = total.toFixed(2);
        return <div>{formattedTotal}</div>;
      },
    },
    {
      Header: 'Bonus',
      accessor: 'Inc',
      sort: true,
      Cell: ({ value }) => {
        const formattedValue = parseFloat(value).toFixed(2);
        return <span>{formattedValue}</span>;
      },
      Footer: ({ data }) => {
        const total = data.reduce((sum, row) => sum + (row.Bonus || 0), 0);
        const formattedTotal = total.toFixed(2);
        return <div>{formattedTotal}</div>;
      },     

    },
  ];

  const sizePerPageList = [
    {
      text: '10',
      value: 10,
    },
    {
      text: '25',
      value: 25,
    },
    {
      text: '50',
      value: 50,
    },
  ];

  useEffect(() => {
    const { startDate, endDate } = dateRange;
    const options = {
      startDate,
      endDate,
      ranges: {
        // Define your custom ranges here
        'Today'       : [moment(), moment()],
				'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'This Week': [moment().startOf('week'), moment().endOf('week')],
				'Last week': [moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      },
      // Add more customization options if needed
      showDropdowns: true,
      showWeekNumbers: true,
      locale: {
        format: 'MMMM D, YYYY',
      },
    };

    $('#daterange-btntdy').daterangepicker(options, (start, end) => {
      handleDateRangeChange(start, end);
    });
  }, []);

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: 'dashboard2', path: '/apps/ecommerce/customers' },
          {
            label: 'leaderboard',
            path: '/apps/ecommerce/customers',
            active: true,
          },
        ]}
        title={'Sales-LeaderBoard'}
      />

      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col sm={12}>
                  <div className="text-sm-end">
                    <Button className="btn btn-success mb-2 me-1" id="daterange-btntdy">
                      <i className="mdi mdi-calendar-month"></i>
                    </Button>
                  </div>
                </Col>
              </Row>

              {data ? (
                <Table
                  columns={columns}
                  data={data}
                  pageSize={10}
                  sizePerPageList={sizePerPageList}
                  isSortable={true}
                  pagination={true}
                  isSelectable={false}
                  isSearchable={true}
                  tableClass="table-striped"
                  searchBoxClass="mt-2 mb-1"
                />
              ) : (
                <div>Loading...</div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Customers;

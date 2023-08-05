import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from "@mui/material/TablePagination";
import { makeStyles } from "@mui/styles";
import Axios from "axios";
import { sortBy } from "lodash";
import { backend_url } from "../urls.js";
import LinearProgress from '@mui/material/LinearProgress';

const BaseContainer = React.lazy(() => import('../components/BaseContainer.jsx'));
const ProductDetailsDrawer = React.lazy(() => import('../components/ProductDetailsDrawer.jsx'));
const ProductsList = React.lazy(() => import('../layouts/ProductsLists.jsx'));


const styles = makeStyles({
  hover: {
    '&:hover': { cursor: 'pointer' }
  },
});

function createColumns(id, title) {
  return { id, title };
}

const columns = [
  createColumns(1, 'ID'),
  createColumns(2, 'Title'),
  createColumns(3, 'Description'),
  createColumns(4, 'Price'),
  createColumns(5, 'Stock'),
];

function Products() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [openDrawer, setOpenDrawer] = useState(false);
  const [productId, setProductId] = useState(1);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const classes = styles();

  const getData = () => {
    Axios.get(`${backend_url}/getProducts`).then(res => {
      setData(res.data);
      setIsLoading(false);
    })
  }

  useEffect(() => {
    getData();
  }, []);

  const openProductDetails = (id) => {
    setProductId(id);
    setOpenDrawer(!openDrawer);
  }

  const closeProductDetails = () => {
    setProductId(1);
    setOpenDrawer(!openDrawer);
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const dataSorted = data ? sortBy(data, ["id"], ["desc"]) : null;

  const rows = dataSorted?.slice(page * rowsPerPage,
    page * rowsPerPage + rowsPerPage).map((item) => (
      <TableRow
        className={classes.hover}
        hover
        key={item.id}
        onClick={() => openProductDetails(item.id)}
      >
        <TableCell component="th" scope="row">{item.id}</TableCell>
        <TableCell>{item.title}</TableCell>
        <TableCell>{item.description}</TableCell>
        <TableCell align="right">{formatter.format(item.price)}</TableCell>
        <TableCell align="right">{item.stock}</TableCell>
      </TableRow>
    ));

  const count = data?.length;

  const onPageChange = (event, newPage) => {
    setPage(newPage);
  }

  const onRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  return (
    <>
      <Suspense fallback={ <LinearProgress /> }>
        <BaseContainer
          component={
            <>
              <ProductsList
                columns={columns}
                isLoading={isLoading}
                rows={rows}
              />
              <TablePagination
                component="div"
                count={count}
                page={page}
                onPageChange={onPageChange}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={onRowsPerPageChange}
                rowsPerPageOptions={[5, 10, 25, 50]}
              />
            </>
          }
        />
        <ProductDetailsDrawer
          id={productId}
          openDrawer={openDrawer}
          closeProductDetails={closeProductDetails}
          getDataProductsList={getData}
        />
      </Suspense>
    </>
  );
}

export default Products;
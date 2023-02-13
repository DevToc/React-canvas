import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

function Items({ currentItems, itemOffset }) {
    return (
        <>
            <div className="employee_tabel">
                <table className="em_table table table-striped table-bordered table-responsive">
                    <thead style={{ verticalAlign: "middle" }}>
                        <tr >
                            <th rowSpan={"2"}>#</th>
                            <th rowSpan={"2"}>Employee</th>
                            <th rowSpan={"2"}>Date of Sale</th>
                            <th rowSpan={"2"}>Receipt Number</th>
                            <th rowSpan={"2"}>Description</th>
                            <th colSpan={"4"}>Sale </th>
                        </tr>
                        <tr>
                            <th>Id</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentItems && currentItems.map((item, index) => (
                            <tr key={itemOffset + index + 1} style={{ border: "1px solid rgb(219, 219, 219)" }}>
                                <td>{itemOffset + index + 1}</td>
                                <td>{item.Employee}</td>
                                <td>{item.Date}</td>
                                <td>{item.Receipt}</td>
                                <td>{item.Description}</td>
                                <td>{item.Id}</td>
                                <td>{item.Item}</td>
                                <td>{item.Quantity}</td>
                                <td>{item.Amount}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}




const SaleReportList = () => {


    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const sale_arrays = JSON.parse(localStorage.getItem('sale_array'));

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + 15;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(sale_arrays.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(sale_arrays.length / 15));
    }, [itemOffset, 15]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 15) % sale_arrays.length;
        // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };


    return (
        <>
            <h1 style={{ paddingTop: "70px" }}>Sale's information</h1>
            <Items currentItems={currentItems} itemOffset={itemOffset} />
            <div className='text-center w-100'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>
        </>
    )
}

export default SaleReportList;
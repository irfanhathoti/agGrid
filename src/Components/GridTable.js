import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './Style.css'


const GridTable = ({ dat }) => {
    const [gridApi, setGridApi] = useState([])
    const[gridColumnApi,setGridcolumnApi] = useState(null)
    const[data,setData] = useState(dat)
    console.log(gridColumnApi)
    const columns = [
        { headerName: "ID", field: 'id', },
        { headerName: "Name", field: 'name', tooltipField: 'make' },
        { headerName: "Email", field: 'email' },
        { headerName: "Body", field: "body", }
    ]


    const defaultColumnDef = {
        sortable: true, flex: 1, floatingFilter:true,filter:true

    }
   
    const onGridReady = (params) => {
        setGridApi(params.api)
        fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json())
            .then(res => {
                params.api.applyTransactionAsync({ add: res })
            })
            .catch(error => console.log("Error", error))

        setGridApi(params.api)
        setGridcolumnApi(params.columnApi)
    }
    return (
        <>
        <input type='text'  onChange={e=>setData(gridApi.setQuickFilter(e.target.value))} value={data} />
            <div className="ag-theme-alpine" style={{ width: "100%", height: 550 }}>
                <AgGridReact columnDefs={columns} defaultColDef={defaultColumnDef} onGridReady={onGridReady}
                    pagination={true}
                    paginationPageSize={10}
                />
            </div>
        </>
    )
}

export default GridTable
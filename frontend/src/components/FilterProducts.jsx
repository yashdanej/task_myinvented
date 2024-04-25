import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../context/MyContext';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';

const FilterProducts = () => {
    const { products, getPrevPage, getNextPage, loading } = useContext(MyContext);
    const [filters, setFilter] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    });
  return (
    <>
    {/* {loading ? "Loading...":
    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                    <th scope="col" className="px-6 py-3 rounded-s-lg rounded-bl-none ">
                        HSN CODE
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-bl-none ">
                        COUNTRY
                    </th>
                    <th scope="col" className="px-6 py-3">
                        SUM OF QUANTITY
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-br-none">
                        AVG OF UNT PRICE FC
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-e-lg rounded-br-none">
                        FREQUENCY
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    products?.data?.map((product, index) => {
                        return (
                            <tr key={index} className="bg-white">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {product['HSN CODE']}
                                </th>
                                <td className="px-6 py-4">
                                    {product['COUNTRY']}
                                </td>
                                <td className="px-6 py-4">
                                    {product['SUM OF QUANTITY']}
                                </td>
                                <td className="px-6 py-4">
                                    {product['AVG OF UNT PRICE FC']}
                                </td>
                                <td className="px-6 py-4">
                                    {product['FREQUENCY']}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        {
            products.length!==0 &&
            <div className='flex justify-center'>
                <button onClick={() => products?.pagination?.page!=1 && getPrevPage()} className='p-4 rounded-2xl m-2 font-bold bg-slate-400 disabled:text-slate-300' disabled={products?.pagination?.page==1 && true}>{`<<`}Prev</button>
                <button onClick={getNextPage} className='p-4 rounded-2xl m-2 font-bold bg-slate-400 disabled:text-slate-300' disabled={products?.pagination.page==products?.pagination?.totalPages && true}>Next{'>>'}</button>
            </div>
        }
    </div>
    } */}

{
    loading ? <p className='text-sm text-white font-bold'>Loading...</p>:
    products.data.length > 0 && (
        <>
            <InputText className='p-4 my-2'
            placeholder='Search'
                onInput={(e) =>
                    setFilter({
                        global: {value: e.target.value, matchMode: FilterMatchMode.CONTAINS},
                    })
                }
            />
            <DataTable value={products.data} sortMode='multiple' filters={filters}
                paginator
                rows={8}
                rowsPerPageOptions={[5,8,10,20,30,100]}
                totalRecords={products.pagination?.totalPages}
            >
                <Column field='HSN CODE' header="HSN CODE" sortable/>
                <Column field='COUNTRY' header="COUNTRY" sortable/>
                <Column field='SUM OF QUANTITY' header="SUM OF QUANTITY" sortable/>
                <Column field='AVG OF UNT PRICE FC' header="AVG OF UNT PRICE FC" sortable/>
                <Column field='FREQUENCY' header="FREQUENCY" sortable/>
            </DataTable>
        </>
    )
}


    </>
  )
}

export default FilterProducts

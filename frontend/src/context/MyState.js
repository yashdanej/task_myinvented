import React, { useState } from 'react';
import MyContext from './MyContext';
import { api } from '../utils/Utils';
import { useSearchParams } from 'react-router-dom';

const MyState = ({children}) => {
    const [hsnCode, setHsnCode] = useState(0);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams(); // for query string
    // On Search Click
    const onSearch = () => {
        setLoading(true);
        const hsn = searchParams.get('hsncode');
        api(`filter?hsncode=${hsn}&page=1&pageSize=10`, "get")
        .then((res) => {
            setProducts(res.data);
        })
        .catch((e) => {
            console.log('error', e);
        })
        .finally(() => {
            setLoading(false);
        });
    }

    // Pagination
    const getPrevPage = () => {
        console.log("click");
        setLoading(true);
        const prevPage = +products?.pagination.page - 1;
        const hsn = searchParams.get('hsncode');
        api(`filter?hsncode=${hsn}&page=${prevPage}&pageSize=10`, "get")
        .then((res) => {
            setProducts(res.data);
        })
        .catch((e) => {
            console.log('error', e);
        })
        .finally(() => {
            setLoading(false);
        });
    }

    const getNextPage = () => {
        setLoading(true);
        console.log('products?.page', products?.pagination.page);
        const nextPage = +products?.pagination.page + 1;
        const hsn = searchParams.get('hsncode');
        console.log('nextPage', nextPage);
        api(`filter?hsncode=${hsn}&page=${nextPage}&pageSize=10`, "get")
        .then((res) => {
            setProducts(res.data);
        })
        .catch((e) => {
            console.log('error', e);
        })
        .finally(() => {
            setLoading(false);
        });
    }

    const state = {
        hsnCode,
        setHsnCode,
        onSearch,
        products,
        setSearchParams,
        getPrevPage,
        getNextPage,
        loading
    }

  return (
    <MyContext.Provider value={state}>
        {children}
    </MyContext.Provider>
  )
}

export default MyState;

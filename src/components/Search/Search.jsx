import { useEffect, useState } from 'react'
import useDebounce from '../../hooks/useDebounce/useDebounce'
import { useParams, useSearchParams } from 'react-router-dom';

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get('search') || '');
    const debounceSearch = useDebounce(search, 500);
    
    useEffect(() => {
        const params = {};
    
        if (debounceSearch) params.search = debounceSearch;

        setSearchParams(params);
    }, [debounceSearch]);

    return (
        <div>
            <input
                type="search"
                placeholder='search'
                onChange={(e) => { setSearch(e.target.value) }}
            />
        </div>
    )
}

export default Search
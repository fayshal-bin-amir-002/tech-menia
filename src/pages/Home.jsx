import { useEffect, useState } from "react";
import LoadingSpinner from "../components/Loader/LoadingSpinner";
import ProductCard from "../components/ProductCard";
import { CiFilter } from "react-icons/ci";


const Home = () => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("");
    const [totalProducts, setTotalProducts] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [brand, setBrand] = useState([]);
    const [category, setCategory] = useState([]);
    const [priceRange, setPriceRange] = useState([]);
    const [priceSorting, setPriceSorting] = useState('');
    const [dateSorting, setDateSorting] = useState(false);

    const filterData = {
        search, brand, category, priceRange, priceSorting, dateSorting
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        setSearch(search);
        setCurrentPage(1);
    }

    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_BASE_URL}/products?page=${currentPage - 1}&filterData=${JSON.stringify(filterData)}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data?.result);
                setTotalProducts(Number(data?.total));
                setLoading(false);
            })
    }, [search, currentPage, brand, category, priceRange, priceSorting, dateSorting, totalProducts])

    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_BASE_URL}/filterData`)
            .then((res) => res.json())
            .then((data) => {
                setBrands(data?.brandNames);
                setCategories(data?.categories);
                setLoading(false);
            })
    }, [])

    const pages = [...Array(Math.ceil(parseInt(totalProducts) / 12)).keys()];

    const priceRanges = [
        { price: "0 - 499" },
        { price: "500 - 999" },
        { price: "1000 - 1999" },
        { price: "2000 - 5000" }
    ]

    return (
        <div className="py-6 md:py-8 lg:py-12">
            {/* search form */}
            <div>
                <form onSubmit={handleSearch} className="flex justify-end items-center mb-6">
                    <label className="input input-bordered flex items-center gap-2 w-full lg:w-1/2 ms-auto">
                        <input type="search" name="search" className="grow w-full" placeholder="Search product name" />
                        <button type="submit" className="bg-sky-200 rounded-full px-3 py-2">Search</button>
                    </label>
                </form>
            </div>

            <div className="drawer mb-10">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content justify-end items-end text-right">

                    <label htmlFor="my-drawer" className="btn bg-sky-200 drawer-button">Filter Products <CiFilter className="inline text-lg" /></label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <form onChange={() => setCurrentPage(1)}>
                            {/* brand selection */}
                            <div className="mb-5">
                                <p className="font-medium text-lg border-b mb-3">Brand</p>
                                <div>
                                    {
                                        brands && brands.map((b) => <div key={b._id} className="flex items-center gap-2 mb-1"><input type="checkbox" className="checkbox" onChange={(e) => e.target.checked ? setBrand([...brand, b?._id]) :
                                            setBrand(brand.filter((r) => r !== b?._id))} /> <span>{b._id}</span></div>)
                                    }
                                </div>
                            </div>
                            {/* category selection */}
                            <div className="mb-5">
                                <p className="font-medium text-lg border-b mb-3">Category</p>
                                <div>
                                    {
                                        categories && categories.map((c) => <div key={c._id} className="flex items-center gap-2 mb-1"><input type="checkbox" className="checkbox" onChange={(e) => e.target.checked ? setCategory([...category, c._id]) : setCategory(category.filter((r) => r !== c?._id))} /> <span>{c._id}</span></div>)
                                    }
                                </div>
                            </div>
                            {/* price range selection */}
                            <div className="mb-5">
                                <p className="font-medium text-lg border-b mb-3">Price Range</p>
                                <div>
                                    {
                                        priceRanges.map((price) => <div key={price.price} className="flex items-center gap-2 mb-1"><input type="radio" name="radio-1" className="radio" onChange={(e) => e.target.checked ? setPriceRange(price.price.split("-")) : setPriceRange('')} /> <span>{price.price}</span></div>)

                                    }
                                    <div className="flex items-center gap-2 mb-1"><input type="radio" name="radio-1" className="radio" onChange={(e) => e.target.checked ? setPriceRange([]) : setPriceRange([])} /> <span>None</span></div>
                                </div>
                            </div>
                            {/* price sorting selection */}
                            <div className="mb-5">
                                <p className="font-medium text-lg border-b mb-3">Price Sorting</p>
                                <div>

                                    <div className="flex items-center gap-2 mb-1"><input type="radio" className="radio" name="radio-1" onChange={(e) => e.target.checked ? setPriceSorting('lth') : setPriceSorting("")} /> <span>{"Low to High"}</span></div>
                                    <div className="flex items-center gap-2 mb-1"><input type="radio" className="radio" name="radio-1" onChange={(e) => e.target.checked ? setPriceSorting('htl') : setPriceSorting("")} /> <span>{"High to Low"}</span></div>
                                    <div className="flex items-center gap-2 mb-1"><input type="radio" className="radio" name="radio-1" onChange={(e) => e.target.checked ? setPriceSorting('') : setPriceSorting("")} /> <span>{"None"}</span></div>

                                </div>
                            </div>
                            {/* date sorting selection */}
                            <div className="mb-5">
                                <p className="font-medium text-lg border-b mb-3">Date Sorting</p>
                                <div>

                                    <div className="flex items-center gap-2 mb-1"><input type="checkbox" className="checkbox" onChange={(e) => e.target.checked ? setDateSorting(true) : setDateSorting(false)} /> <span>{"Show the newest"}</span></div>

                                </div>
                            </div>
                        </form>

                    </ul>
                </div>
            </div>
            {/* {
                products.length === 0 && <h3 className="h-[50vh] text-3xl text-center font-semibold flex items-center justify-center">No Product Found!</h3>
            } */}

            {
                loading ? <LoadingSpinner></LoadingSpinner> :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

                        {
                            products.length > 0 ? products.map((product) => <ProductCard key={product._id} product={product}></ProductCard>) : <h3 className="h-[50vh] text-3xl text-center font-semibold flex items-center justify-center">No Product Found!</h3>
                        }
                    </div>
            }

            <div className="mt-6 md:mt-8">
                <nav role="navigation" aria-label="Pagination Navigation">
                    <ul className="flex list-none items-center justify-center text-sm text-slate-700 md:gap-1">
                        <li>
                            <button
                                onClick={() => setCurrentPage(currentPage - 1)}
                                className="inline-flex h-10 items-center justify-center gap-4 stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
                                disabled={currentPage === 1}
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="-mx-1 h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    role="graphics-symbol"
                                    aria-labelledby="title-25 desc-25"
                                >
                                    <title id="title-25">Previous page</title>
                                    <desc id="desc-25">link to previous page</desc>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                        </li>


                        {
                            pages.map((page) => <li key={page}>
                                <button
                                    onClick={() => setCurrentPage(page + 1)}
                                    className={`${currentPage === page + 1 ? 'border-t text-emerald-500' : ''} h-10 items-center justify-center whitespace-nowrap  border-t-emerald-500 px-4 text-sm font-medium transition duration-300 hover:border-t-emerald-600 hover:bg-emerald-50 hover:text-emerald-600 focus:border-t-emerald-700 focus:bg-emerald-50 focus:text-emerald-700 focus-visible:outline-none md:inline-flex`}

                                >
                                    {page + 1}
                                </button>
                            </li>)
                        }

                        <li>
                            <button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                className="inline-flex h-10 items-center justify-center gap-4 stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
                                disabled={currentPage === pages.length}
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="-mx-1 h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    role="graphics-symbol"
                                    aria-labelledby="title-26 desc-26"
                                >
                                    <title id="title-26">Next page</title>
                                    <desc id="desc-26">link to next page</desc>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default Home;
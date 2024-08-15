import { useEffect, useState } from "react";
import LoadingSpinner from "../components/Loader/LoadingSpinner";
import ProductCard from "../components/ProductCard";

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        setSearch(search);
    }

    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_BASE_URL}/products`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
    }, [search])

    return (
        <div className="py-6 md:py-8 lg:py-12">
            <div>
                <form onSubmit={handleSearch} className="flex justify-center mb-5 lg:mb-8">
                    <label className="input input-bordered flex items-center gap-2 w-full lg:w-1/2 mx-auto">
                        <input type="text" name="search" className="grow w-full" placeholder="Search" />
                        <button type="submit" className="bg-sky-200 rounded-full px-3 py-2">Search</button>
                    </label>
                </form>
            </div>

            {
                loading ? <LoadingSpinner></LoadingSpinner> :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {
                            products && products.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)
                        }
                    </div>
            }

        </div>
    );
};

export default Home;
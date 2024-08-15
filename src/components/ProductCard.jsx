import PropTypes from 'prop-types';

const ProductCard = ({product}) => { console.log(product);
    return (
        <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 group">
            
            <figure>
                <img src={product?.productImage} alt="card image" className="aspect-video w-full object-cover group-hover:scale-90 duration-700" />
            </figure>
            
            <div className="p-6">
                <header className="mb-4">
                    <h3 className="text-xl font-medium text-slate-700">{product?.productName}</h3>
                    <p className=" text-slate-400">${product?.price}</p>
                    <p className=" text-slate-500">Category : {product?.category}</p>
                    <p className=" text-slate-500">Ratings : {product?.ratings}</p>
                    <p className=" text-slate-500">{product?.productCreationDate}</p>
                </header>
                <p>{product?.description}</p>
            </div>
            
            <div className="flex justify-end p-6 pt-0">
                <button className="inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                    <span>Order now!</span>
                </button>
            </div>
        </div>

    );
};

ProductCard.propTypes = {
    product: PropTypes.object
};

export default ProductCard;
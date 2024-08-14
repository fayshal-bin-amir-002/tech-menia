import "./spinner.css"

const LoadingSpinner = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="loading-wave">
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
            </div>

        </div>
    );
};

export default LoadingSpinner;
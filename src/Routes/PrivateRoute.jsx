import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/Loader/LoadingSpinner';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const { user, loading } = useAuth();

    if(loading) return <LoadingSpinner></LoadingSpinner>

    if(!user) return <Navigate to="/login" state={location?.pathname}></Navigate>

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;
import React from 'react';
import Dashboardbar from '../Dashboardbar/Dashboardbar';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import './Dashboardhome.css';
import Pay from '../Pay/Pay';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Myorder from '../Myorder/Myorder';
import Review from '../Review/Review';
import ManageAllOrde from '../ManageAllOrder/ManageAllOrde';
import Addproduct from '../Addproduct/Addproduct';
import Makeadmin from '../Makeadmin/Makeadmin';
import Manageproduct from '../Manageproduct/Manageproduct';

const Dashboardhome = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Header></Header>
            <div class="row">
                <div class="col-lg-2" style={{ backgroundColor: "rgb(3, 110, 143)", padding: "50px 10px" }}>
                    {/* rgb(3, 110, 143) */}
                    <Dashboardbar></Dashboardbar>
                </div>

                <div class="col-lg-10" style={{ padding: "20px" }}>

                    <Switch>
                        <Route exact path={path}>
                            <h1>Welcome to Your Dashboard</h1>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/myorder`}>
                            <Myorder></Myorder>
                        </Route>
                        <Route path={`${path}/myorder/:id`}>
                            <Myorder></Myorder>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/manageallorder`}>
                            <ManageAllOrde></ManageAllOrde>
                        </Route>
                        <Route path={`${path}/addproduct`}>
                            <Addproduct></Addproduct>
                        </Route>
                        <Route path={`${path}/makeadmin`}>
                            <Makeadmin></Makeadmin>
                        </Route>
                        <Route path={`${path}/manageproduct`}>
                            <Manageproduct></Manageproduct>
                        </Route>
                    </Switch>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboardhome;
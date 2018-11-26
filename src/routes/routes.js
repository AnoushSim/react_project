import React from 'react';
import { Route, Switch , BrowserRouter} from 'react-router-dom';
import Admin from '../Components/Admin/Service/Admin';
import Account from '../Components/Test/Test';

class Routes extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                         <Route exact path='/admin' component={Admin}/>
                         <Route exact path='/account' component={Account}/>
                   </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default Routes;

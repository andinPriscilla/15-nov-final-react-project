import {HashRouter as Router, Routes as Switch, Route} from 'react-router-dom'

import MyProvider from '../context/MyProvider'
import Header from '../components/Header'


import Home from '../components/pages/Home'
import Meals from '../components/pages/Meals'
import Ingredients from '../components/pages/Ingredients'

const Routes = () => {
    return (
        <MyProvider>
            <Router>
                <main>
                    <Header />
                    <Switch>
                        <Route path='/' element={<Home />} />
                        <Route path='/meals' element={<Meals />} />
                        <Route path='/ingredients' element={<Ingredients />} />
                    </Switch>
                </main>
                
            </Router>
        </MyProvider>
    )
}

export default Routes

import Movie from "./Pages/Movie/Movie"
import Collection from "./Pages/Collection/Collection"
import TvShow from "./Pages/TvShow/TvShow"
import MovieDetails from "./Pages/Movie/MovieDetails/MovieDetails"
import Navbar from "./Pages/Movie/components/Navbar"
import {BrowserRouter, Route, Switch} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/Collection" component={Collection} exact/>
                <Route path="/TvShow" component={TvShow} exact/>
                <Route path="/detail/:id" component={MovieDetails} exact/>
                <Route path="/" component={Movie}/>
            </Switch>
        </BrowserRouter>
    )
}
export default App;
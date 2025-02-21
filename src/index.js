import { MainView } from './views/main/main'
import { Favorites } from './views/favorites/favorite_books.js'
class App
{
    #routes = [ { path: "", view: MainView }, { path: "#favorites", view: Favorites }]

    #appState = { favorites: [], searchQuery: "", favoritesBooks: [] }

    constructor ()
    {
        window.addEventListener( "hashchange", this.route.bind( this ) )
        this.route()
    }
    route ()
    {
        if ( this.currentView ) this.currentView.destroy()
        const View = this.#routes.find( route => route.path === location.hash ).view
        this.currentView = new View( this.#appState )
        this.currentView.render()
    }

}
new App()
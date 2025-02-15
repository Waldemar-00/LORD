import { AbstractView } from "../../common/abstract_view.js"
import onChange from 'on-change'
import { Header } from "../../components/header/header.js"

export class MainView extends AbstractView
{
    state = {
        searchQuery: null,
        loading: false,
        list: [],
        offset: 0
    }
    constructor ( appState )
    {
        super()
        this.setTitle( 'Search for books' )
        this.appState = appState
        this.appState = onChange(this.appState, this.watchAppState.bind( this ) )
    }

    watchAppState ( path )
    {
        if( path === 'favorites') console.log( path )
    }
    render ()
    {
         this.root.innerHTML = ''
         this.renderHeader()
         this.appState.favorites.push( '2' )
        //`Number of books: ${ this.appState.favorites.length }`
    }
    renderHeader ()
    {
        const header = new Header( this.appState ).render()
        this.root.prepend( header )
    }
    destroy ()
    {
        return
    }
}
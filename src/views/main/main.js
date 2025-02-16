import { RootPage } from "../../common/root_page.js"
import onChange from 'on-change'
import { Header } from "../../components/header/header.js"
import { Seacher } from '../../components/search/searcher.js'

export class MainView extends RootPage
{
    #state = {
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
         this.renderSeacher()
        //  this.appState.favorites.push( '2' )
        //`Number of books: ${ this.appState.favorites.length }`
    }
    renderHeader ()
    {
        const header = new Header( this.appState ).render()
        this.root.prepend( header )
    }
    renderSeacher ()
    {
        const seacher = new Seacher( this.#state ).render()
        this.root.append( seacher )
    }
    destroy ()
    {
        return
    }
}
import { RootPage } from "../../common/root_page.js"
import onChange from 'on-change'
import { Header } from "../../components/header/header.js"
import { Seacher } from '../../components/search/searcher.js'
import { Books } from '../../components/books/books.js'

export class MainView extends RootPage
{
    #state = {
        searchQuery: null,
        loading: false,
        list: [],
        offset: 0
    }
    constructor ( appState ) //* { favorites: [] }
    {
        super()
        this.setTitle( 'Search for books' )
        this.appState = appState
        this.appState = onChange( this.appState, this.watchAppState.bind( this ) )
        this.#state = onChange( this.#state, this.watchState.bind( this ) )
    }

    watchAppState ( path, _value, _previousValue ) //* arguments fron onCahge('on-change')
    {
        // if( path === 'favorites') console.log( path )
    }
    async watchState ( path, _value, _previousValue )
    {
        if ( path === 'searchQuery' )
        {
            this.#state.loading = true
            const books = await this.loadBookList( this.#state.searchQuery, this.#state.offset )
            this.#state.list = books.docs
            console.log( this.#state.list.length )
            this.#state.loading = false
        }
    }
    async loadBookList ( searchQuery, offset )
    {
        const response = await fetch( `https://openlibrary.org/search.json?q=${ searchQuery }&offset=${ offset }` )
        return await response.json()
    }
    render ()
    {
        this.root.innerHTML = ''
        this.renderHeader()
        this.renderSeacher()
        this.renderBooks()
        // this.appState.favorites.push( '2' )
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

    renderBooks ()
    {
        const books = new Books( this.#state ).render()
        this.root.append( books )
    }
    destroy ()
    {
        return
    }
}
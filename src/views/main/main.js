import { AbstractView } from "../../common/view.js"
import onChange from 'on-change'

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
         const main = document.createElement( 'h1' )
         main.innerText = `Number of books: ${ this.appState.favorites.length }`
         this.root.append( main )
         this.appState.favorites.push('2')
    }
    destroy ()
    {
        return
    }
}
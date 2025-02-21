import { RootPage } from "../../common/root_page.js"
import onChange from 'on-change'
import { Header } from "../../components/header/header.js"
import { Books } from '../../components/books/books.js'
import { Card } from '../../components/books/cards/card.js'
export class Favorites extends RootPage
{
    constructor ( appState )
    {
        super('section')
        this.setTitle( 'Favorites' )
        this.appState = appState
        this.appState = onChange( this.appState, this.watchAppState.bind( this ) )
    }

    watchAppState ( path, _pathName, _pathNamePrevious )
    {
        if ( path === 'favorites' )
        {
           this.render()
        }
    }
    render ()
    {
        this.root.innerHTML = ''
        this.renderHeader()
        this.renderBooks()
        this.renderCards()
    }
    renderHeader ()
    {
        const header = new Header( this.appState ).render()
        this.root.prepend( header )
    }
    renderBooks ()
    {
        const books = new Books( this.appState, this.appState ).render()
        this.root.append( books )
    }
    renderCards ()
    {
        if ( document.querySelector( '.cards' ) ) document.querySelector( '.cards' ).remove()
        const cards = new Card({ list: this.appState.favoritesBooks }, this.appState ).render()
        this.root.append( cards )
    }
    destroy ()
    {
        onChange.unsubscribe( this.appState )
    }
}
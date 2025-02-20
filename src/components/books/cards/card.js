import './card.css'
import { Component } from '../../../common/component.js'

export class Card extends Component
{
    constructor ( state, appState )
    {
        super( 'section' )
        this.state = state
        this.appState = appState
    }
    render ()
    {
        this.element.innerHTML = null
        this.element.classList.add( 'cards' )
        this.element.innerHTML =
                ( this.state.list.map( book =>
                {
                    // console.log( this.appState.favorites )
                    const existInFavorites = this.appState.favorites.find( key => key == book.key )
                    // console.log( existInFavorites ? 'existInFavorites ' : '')

                    return `<div class="card">
                                <div class="innerImg">
                                     <img src="https://covers.openlibrary.org/b/olid/${ book.cover_edition_key }-M.jpg" alt="cover"/>
                                </div>
                                <div class="description">
                                    <p class="jenre">Action & Adventure</p>
                                    <p class="title">${ book.title ? book.title : 'No title'}</p>
                                    <p class="author">${ book.author_name ? book.author_name[0] : 'No Author' }</p>
                                    <div class="add ${ existInFavorites ? 'active' : ''}">
                                        ${ existInFavorites
                                            ? `<img src="static/logo/Frame 14.svg" data-delete=${ book.key } alt="save"/>`
                                            : `<img src="static/logo/Frame 4.svg" data-key=${ book.key } alt="save"/>`
                                        }
                                    </div>
                                </div>

                            </div>`
                    } )
            ).join( '' )
        if ( this.element.innerHTML ) this.#addDeleteToFavorites()
        return this.element
    }
    #addDeleteToFavorites ()
    {
        this.element.addEventListener( 'click', ( e ) =>
        {
            const dataKey = e.target.getAttribute( 'data-key' )
            const dataDelete = e.target.getAttribute( 'data-delete' )
            if( dataKey ) this.appState.favorites = Array.from( new Set( [ ...this.appState.favorites, dataKey ] ) )
            if ( dataDelete ) this.appState.favorites = this.appState.favorites.filter( key => key !== dataDelete )
        })
    }
}
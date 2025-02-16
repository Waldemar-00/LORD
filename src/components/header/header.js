import { Component } from '../../common/header_component'
import './header.css'
export class Header extends Component
{
    constructor ( appState )
    {
        super( 'header' )
        this.appState = appState
    }

    render ()
    {
        this.element.innerHTML = ''
        this.element.classList.add( 'header' )
        this.element.innerHTML = `
            <div class="logo">
                <img src="./static/logo/logo.svg" alt="logo">
            </div>
             <div class="search">
                <a class="search_anchor" href="#">
                    <img src="./static/logo/search.svg" alt="search">
                    <span>Book search</span>
                </a>
                <a class="favorites_anchor">
                    <img src="./static/logo/favorites.svg" alt="favirites">
                    <span>Favorites</span>
                    <span class="round">${ this.appState.favorites.length }</span>
                </a>
            </div>
        `
        return this.element
    }
}
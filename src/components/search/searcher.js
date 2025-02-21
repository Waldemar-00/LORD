import './searcher.css'
import { Component } from '../../common/component.js'

export class Seacher extends Component
{
    constructor ( state )
    {
        super('section')
        this.state = state
    }
    getSearchQueryValue ()
    {
        console.log( this.state.searchQuery )
        return this.state.searchQuery
    }
    render ()
    {
        this.element.innerHTML = ''
        this.element.classList.add( 'searcher' )
        this.element.innerHTML = `
            <div class="searcher_div">
                <label>
                    <img src="./static/logo/search.svg" alt="search">
                    <input
                        type="text"
                        placeholder="Find book or author..."
                        >
                </label>
             </div>
             <button type="button" class="img_seacher">
                 <img src="./static/logo/search_along.svg" alt="search button">
              </button>

        `
        this.element.addEventListener( 'change', ( e ) => this.state.searchQuery = e.target.value )
        this.element.querySelector( 'button' ).addEventListener( 'click', ( e ) => this.getSearchQueryValue() )
        this.element.querySelector( 'input' ).addEventListener( 'keydown', ( e ) =>
        {
            if(e.code === 'Enter') this.getSearchQueryValue()
        })
        return this.element
    }


}
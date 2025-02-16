import './searcher.css'
import { Component } from '../../common/header_component'

export class Seacher extends Component
{
    constructor ( state )
    {
        super('section')
        this.state = state
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
        this.element.addEventListener( 'input', ( e ) => this.state.searchQuery = e.target.value )
        return this.element
    }


}
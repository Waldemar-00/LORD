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
        this.element.innerHTML = ''
        this.element.classList.add( 'cards' )

        this.element.innerHTML =
                ( this.state.list.map( book =>
                    {
                    return `<div class="card">
                                <div class="innerImg">
                                     <img src="" alt="">
                                </div>
                                <div class="description">
                                    <p class="jenre">Action & Adventure</p>
                                    <p class="title">${ book?.title }</p>
                                    <p class="author">${book?.author_name}</p>
                                </div>

                            </div>`
                    } )
                ).join( '' )
        return this.element
    }
}
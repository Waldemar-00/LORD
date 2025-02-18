import { Component } from '../../common/component'
import './books.css'

export class Books extends Component
{
    constructor ( books, appState )
    {
        super( 'section' )
        this.books = books
        this.appState = appState
    }

    render ()
    {
        this.element.innerHTML = ''
        this.element.classList.add( 'books' )
        if ( this.books.loading )
        {
            this.element.innerHTML = `
             <div class="loading">
               Books is <span>LOADING...</span>
            </div>
        `
        } else if ( !this.books.loading  )
        {
            this.element.innerHTML = `
           <div class="amount">
                Amount of books - ${ this.books.list.length }
            </div>
        `
        }

        return this.element
    }
}
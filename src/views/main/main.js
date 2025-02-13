import { AbstractView } from "../../common/view.js"

export class MainView extends AbstractView
{
    constructor ()
    {
        super()
        this.setTitle('Search for books')
    }
     render ()
     {
         this.root.innerHTML = ''
         const main = document.createElement( 'h1' )
         main.innerText = 'TEST'
         this.root.append( main )

    }
    destroy ()
    {
        return
    }
}
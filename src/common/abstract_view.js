export class AbstractView
{
    constructor ()
    {
        this.root = document.querySelector("#root")
    }
    setTitle ( title )
    {
        document.title = title
    }
    render ()
    {
        return
    }
    destroy ()
    {
        return
    }
}
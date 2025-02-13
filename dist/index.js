class AbstractView
{
    constructor ()
    {
        this.root = document.querySelector("#root");
    }
    setTitle ( title )
    {
        document.title = title;
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

class MainView extends AbstractView
{
    constructor ()
    {
        super();
        this.setTitle('Search for books');
    }
     render ()
     {
         this.root.innerHTML = '';
         const main = document.createElement( 'h1' );
         main.innerText = 'TEST';
         this.root.append( main );

    }
    destroy ()
    {
        return
    }
}

class App
{
    #routes = [ { path: "", view: MainView } ]
    appState = {
        favorites: []
    }
    constructor ()
    {
        window.addEventListener( "hashchange", this.route.bind( this ) );
        this.route();
    }
    route ()
    {
        if ( this.currentView ) this.currentView.destroy();
        const View = this.#routes.find( route => route.path === location.hash ).view;
        this.currentView = new View();
        this.currentView.render();
    }
}
new App();

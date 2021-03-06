const FunctionalComponentDemo = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1>Functional Component</h1>
                <p>Functional Components are the primary tool in React to build a small, modular piece of your page.</p>
                <dl>
                    <dt>Can use state</dt>
                    <dd>With the 'useState' hook, functional components can now both render a display to the page and update the information to be shown.</dd>
                    <dt>No 'this' keyword</dt>
                    <dd>Older class components use 'this', functional components have no 'this' object.</dd>
                    <dt>Can use effects</dt>
                    <dd>With the 'useEffect' hook, functional</dd>
                    <dt>return()</dt>
                    <dd>Must return a single element, but this element may have elements inside.</dd>
                </dl>
                <h1>Functional Syntax versus Arrow Function</h1>
            </div>
        </div>
    )
}

export default FunctionalComponentDemo
const HelloWorld = function() {
   return( <h1> Here is hello world in a block body function</h1>
   )
}
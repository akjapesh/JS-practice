# react_practice
--------REACT-----------

1)react createElement:
    .uses an object to assign properties 
    {
        children: ["hello","world"],
        className: "container"
    }
    .children can be string, array of string or another HTML element like React.createElement('span',null,"hello","world") ...another way to assign children.

2)JSX:
    .It is HTML like syntax in JS. But browser uses babel JS compiler to understand it.
    const element=<div className="container">Hello world</div>--->syntax of JSX in script tag

    .expressions in JS are kept in {.} and can be used with variables. 
    const element=<div className={classname}>{children}</div>

    .variables can also be used with properties and JSX supports self closing
    const props={children,classname}
    <div id="app-root" {...props} className="not-container" />
    --> ...expands props and another property of className overwrites it.

 3) React.Fragment:
    its not in HTML used to render 2 elements side-by-side
    JS->   React.createElement(React.Fragment,null,child1,child2)

    JSX->  <React.Fragment><span>child1></span><span>child2</span></React.Fragment>
    
    also <> span>child1></span><span>child2</span> </>

4) Custom component:
    we can make a fuction with variables and reuse that fucntion as a componenent
    *it should start with a capital letter if reffering a component*
    const Message=props => <div className="message">{props.children}</div>
    const element= (
        <div className="container">
            <Message children="hello World"/>
            <Message>Goodbye World</Message>
        </div>
    )
5) Proptypes:
    adds runtime validation to custom components.
    custom propType->
    const PropTypes={
         string(props,propname,componentName){
            if(typeof props[propname]!="string"){
                return new Error(...)
            }
        }
    }
    Sayhello.propTypes={
       firstName: Proptypes.string,
       lastName: Proptype.string,
    }

    PropTypes are not applied on production if applied thoriugh script

6) Ternary Exprestion:

    const Message = ({ text }) => {
    return (
        //jsx
        <div>
        {/*js*/}
        {`This text ${text} contains `}
        <strong> {text.length > 0 ? text.length : "NO"} </strong>
        characters
        </div>
    );
    };
    We have react.createElement div, null for the props, and then the string and so on. we cannot pass a statement instead of string like if/swith statements. No sense of passing statement as an argument to a function.

7)Rerender a react application:

    using interval function and recalling the function after 1 sec. fucntion has the rendering call so it will reload the page every second.

    function tick(){
        const time=new Date().toLocateTimeString();
        const element=(
            <div>
            <div>Hello</div>
            {time}
            </div>
        )
        ReactDOM.render(element,root);
    }
    tick()
    setINterval(tick,1000);

    IN this as it is JSX not JS...so only the {time} part is reloaded every second not the div element("hello").But using JS 
    const element='
            <div>
            <div>Hello</div>
            {$time}
            </div>
        '
    root.innerHTML=element;
    -->in this dev will also be reloaded every second.

8)Styling in React:
    function Box(props){
        return <div classname="box" {...prop}/>
    }
    -->in this function box is overridden by box--small
    function Box(props){
        return <div {...prop}classname="box" />
    }
    -->in this box--small is overriden by box
    fucntion Box({className='',style,...rest}){
        return (
            <div 
            className={'Box ${classname}'}
            style={{fontstyle:'italic',...style}}
            {...rest}/>
    }
    -->right way to make custom classname as a parameter
    <Box className="box--small" style={{background: 'blue'}}>small box</Box>

    Tailwind CSS-->for custom CSS

9)useState hook:
    if we want to change the name
    fucntion greeting(){
        const name='';
        const handleChange=event=>name=event.target.value;
        return <div>
            <form>
            <input onChange={handleChange}>
            </form>
            </div>
    }
    -->this will not do the requirement cause as the function will not trigger re-render and even if it re-renders, the function will be called so values sets to '' again. React hook maintains state.
    
    const [name,setName]=React.useState('');
    const handleChange= event=>setName(event.target.value);
    --> when 1st time the function is rendered the useState sets name value to inital value and then whenver the setname function is called it rerenders the function with the present value as name.

10)useEffect hook:
    managing side-effect->using database to find the stored variable if exists and rendering data from there
    
    const [name,setName]=React.useState(window.localStorage.getitem('name')||'');
    //->>on reloading the page it looks in the local storage if any name is stored then uses that as name
    React.useEffect(()=>{window.localStorage.setItem('name':name)});
    //to store in local storage , it is called every time function is rendered

11)lazy initialization of useState:
    it renders the inital pasr of fetching from the local storage only once as needed.
    just replace by function.
    const [name,setName]=React.useState(()=>{
        return window.localStorage.getitem('name')||'');
        })

12) useEffect dependecy array:
    It helps to keep track of the dependencies to sync between the local storage and local application.
    By this a useEffect function with local storage access is only called when the given state is changed else not called making less renders and faster site.
    function Greeting(){
        ...
    React.useEffect(()=>{
        window.localStorage.setItem('name',name),
        [name]
    })
    ...
    }
    function App(){
        ...
        return (
            <button onclick={()=>setcount(c=>c+1)}>{count}</button>
            <Greeting/>
        )
    }
    -->In this every time App is called or button is clecked Greeting is also called which by passing [name] dependecy array only renders when name attribute is changed.

13) manipulate DOM with React refs:

    while using some libraries like vanilla-tilt which works in DOMnode instead of react elements we need to convert and act on it..ref prop are used. we need to pass a ref which is an object that has a mutable current property. 
    function Tilt({children}){
    const tiltRef=React.useRef();
    React.useEffect(()=>{
        const tiltNode=tiltRef.current;
        const vanillaTiltOptions={...}
        VanillaTilt.init(tiltNode,vanillaTiltOptions)
        return (()=>{
            tiltNode.vanillaTilt.destroy();
        })//deletes all references of DOMnode on vanilla Tilt to avoid memory leaks.
    },[])
    return (
        ...
        <div ref={tiltref}>...</div>
        ...
    )
    }
    -->If we unclick the show tilt checkbox, that will unmount the tilt component from the page removing the DOM node from the page. However, there's still a bunch of event handlers on that DOM node and several references to that DOM node from within the vanilla tilt library. this is handeled by destroy function on return.

14)hook-flow:
    
    In flow of hooks useEffect with cleanups are called only if has no dependecies or has some dependecies, [] will not be called.

    https://github.com/donavon/hook-flow

15)Froms:
    

    



    



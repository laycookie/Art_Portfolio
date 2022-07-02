import Navbar from './Navbar';

export default {
    title: "components/Navbar"
}

export const oneElementNav = () => {
    return (<Navbar 
    names = {["Home"]}
    links = {["/"]} 
    offSetBottomElement = {32}/>)
}
export const twoElementNav = () => {
    return (<Navbar 
    names = {["Home", "Contact"]}
    links = {["/", "/contact"]} 
    offSetBottomElement = {32}/>)
}
export const threeElementNav = () => {
    return (<Navbar 
    names = {["Back", "Home", "Contact"]}
    links = {["exampleURL", "/", "/contact"]} 
    offSetBottomElement = {32}/>)
}
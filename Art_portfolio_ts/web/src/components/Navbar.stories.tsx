import Navbar from './Navbar';

export default {
    title: "components/Navbar"
}

export const oneElementNav = () => {
    return (<Navbar 
    names = {["Home"]}
    links = {["/"]} 
    offSetBottomElement = {64}/>)
}
export const twoElementNav = () => {
    return (<Navbar 
    names = {["Home", "Contact"]}
    links = {["/", "/contact"]} 
    offSetBottomElement = {128}/>)
}
export const threeElementNav = () => {
    return (<Navbar 
    names = {["Back", "Home", "Contact"]}
    links = {["exampleURL", "/", "/contact"]} 
    offSetBottomElement = {196}/>)
}
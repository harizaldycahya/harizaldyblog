import Navbar from "./Navbar";
import Contact from "./Contact";
const Layout = ({children}) => {
    return ( 
        <div className="content">
            <Navbar></Navbar>
            {children}
            <div className="space20"></div>
            <Contact></Contact>
            <div className="space20"></div>
            <div className="copyright">&copy; Harizaldy Cahya Pratama</div>
            <div className="space5"></div>
        </div>
     );
}
 
export default Layout;
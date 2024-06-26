import { Link } from "gatsby";
import React,{useState,useEffect} from "react";
// internal
import MobileMenus from "./mobile-menus";
import { menu_data,menu_data_2,menu_data_3 } from "../../../data/menu_data";

const OffCanvas = ({setIsSidebarOpen,data_1=false,data_2=false,data_3=false}) => {
  const [menuItems, setMenuItems] = useState([]);
  // decide to render
  useEffect(() => {
    if(data_1){
      setMenuItems(menu_data)
    }
    if(data_2){
      setMenuItems(menu_data_2)
    }
    if(data_3){
      setMenuItems(menu_data_3)
    }
  },[])
  return (
    <>
      <div className="tgmobile__menu">
        <nav className="tgmobile__menu-box">
          <div className="close-btn" onClick={()=> setIsSidebarOpen(false)}>
            <i className="flaticon-close-1"></i>
          </div>
          <div className="nav-logo">
            <Link to="/">
              <img src="/assets/img/logo/gb-logo.svg" alt="GreenByte" />
            </Link>
           
          </div>
          <div className="tgmobile__menu-outer">
            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
            <MobileMenus menuItems={menuItems} setIsSidebarOpen={setIsSidebarOpen} />
          </div>
        </nav>
      </div>
      <div onClick={()=> setIsSidebarOpen(false)} className="tgmobile__menu-backdrop"></div>
    </>
  )
}

export default OffCanvas

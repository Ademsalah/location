import React, { useEffect } from "react";
import "./Admin.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletCategorie, fetchCategorie } from "../../api/Cathegories/Cath";
import { setCategorie } from "../../redux/categorieSlice";
import { logout } from "../../redux/action/authaction";
const Admin = ({}) => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth);
  const categ = useSelector((state) => state.categorie);
  const navigate = useNavigate();
  console.log("nthbtou foil aut", authUser);
  const llogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const gotoaddcath = async () => {
    navigate("/addCath");
  };
  const gotoaddprod = async () => {
    navigate("addProduit");
  };
  const fetchcate = async (idcat) => {
    const data = await fetchCategorie(idcat);
    console.log("data jib cat", data, categ);
    dispatch(setCategorie(data.getAll));
  };
  useEffect(() => {
    fetchcate();
  }, []);
  /* partie tfesegh hekel categoryet */
  const handeldelete = async (id) => {
    await deletCategorie(id);
    await alert("hawka tfeskh rte7et minou XD");
    navigate("/admin");
  };
  /* jiben produits  */
  return (
    <div className="bodyAdmin">
      <header className="headerAdmin">
        <div className="header-content responsive-wrapper">
          <div className="header-logo">
            <h3> {authUser.name}</h3>
          </div>
          <div className="header-navigation">
            <nav className="header-navigation-links">
              <a href="#"> {authUser.name} </a>
              <a href="#"> Dashboard </a>
              <a href="#"> Projects </a>
              <a href="#"> Tasks </a>
              <a href="#"> Reporting </a>
              <a href="#"> Users </a>
            </nav>
            <div className="header-navigation-actions">
              <a href="#" className="buttonAdmin">
                <i className="ph-lightning-bold" />
                <span onClick={() => llogout()}>Logout </span>
              </a>
              <a href="#" className="avatar">
                <img
                  src="https://assets.codepen.io/285131/hat-man.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <a href="#" className="buttonAdmin">
            <i className="ph-list-bold" />
            <span>Menu</span>
          </a>
        </div>
      </header>
      <main className="main">
        <div className="responsive-wrapper">
          <div lassName="main-header">
            <h1>ya Welcome </h1>
          </div>
          <div className="horizontal-tabs">
            <a href="#">My Stadiums</a>
            <a href="#">view users </a>
            <a href="#">view reservations </a>
            <a href="#">Plan</a>
            <a href="#">Billing</a>
            <a href="#">Email</a>
            <a href="#">Notifications</a>
            <a href="#" className="active">
              Integrations
            </a>
          </div>
          <div className="content-headerAdmin">
            <div className="content-headerAdmin-actions">
              <a href="#" className="buttonAdmin">
                <i className="ph-faders-bold" />
                <span>Filters</span>
              </a>
              {/*  <a href="#" className="buttonAdmin"> */}
              <div className="button-container">
                <div className="btn-add-cath">
                  <div className="shop-now" onClick={() => gotoaddcath()}>
                    Add Cathegories
                  </div>
                </div>
                {/*  </a> */}
                {/*  <a href="#" className="buttonAdmin"> */}
                <div className="btn-add-cath">
                  <div className="shop-now" onClick={() => gotoaddprod()}>
                    Add produiyet
                  </div>
                </div>
                {/*  </a> */}
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-panel">
              <div className="vertical-tabs">
                <a href="#" className="active">
                  View all
                </a>
                {categ.map((el) => (
                  <>
                    {" "}
                    <Link className="adding" to={`viewProduit/${el._id}`}>
                      {el.name}

                      <button
                        className="button-close"
                        onClick={() => handeldelete(el._id)}
                      ></button>
                    </Link>
                  </>
                ))}
              </div>
            </div>
            <div className="content-main">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Admin;

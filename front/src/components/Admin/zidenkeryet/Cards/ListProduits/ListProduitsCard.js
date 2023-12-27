import React from "react";

import { useNavigate } from "react-router-dom";
import "./Cards.css";
import { deletProduct } from "../../../../../api/pro/Product";
const ListProduitsCard = ({ el, del }) => {
  const navigate = useNavigate();
  const handeldelete = async (id) => {
    await deletProduct(id);
    await alert("hawka tfeskh rte7et minou XD");
    navigate("/admin");
  };
  return (
    <div>
      <section className="hero-section">
        <div className="card-grid">
          <a className="card" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
              }}
            />
            <div className="card__content">
              <p className="card__category">{el.name}</p>
              <h3 className="card__heading">Example Card Heading</h3>
              <a className="btn">
                {el.price} dt || {el.rating}
              </a>
              <div className="buttons">
                <button
                  onClick={() => navigate(`/update/:idcat/:idProduit${el._id}`)}
                >
                  update
                </button>
                <button onClick={() => handeldelete(el._id)}>delete</button>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ListProduitsCard;

import axios from "axios";

export const fetchProduct = async (idcate) => {
  const { data } = await axios.get(
    `http://localhost:4000/Product/jibproduit/${idcate}`
  );
  await console.log("id backend", idcate);
  return data;
};

export const postProduct = async (values) => {
  const addingProduct = await axios.post(
    `http://localhost:4000/Product/ajoutproduit`,
    { ...values }
  );
};

export const deletProduct = async (id) => {
  const deletProduct = await axios.delete(
    `http://localhost:4000/Product/deleteproduit/:productId${id}`
  );
};

export const updateProduct = async (id, value) => {
  const updatedProduct = await axios.put(
    `http://localhost:4000/produit/updateproduit/:productId/:categoriId${id}`,
    value
  );
};

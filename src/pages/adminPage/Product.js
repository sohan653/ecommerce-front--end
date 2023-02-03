import { Select } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
const {Option}=Select
const AdminProduct = () => {
    const [auth, setAuth] = useAuth();

    // state
    const [categories, setCategories] = useState([]);
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [shipping, setShipping] = useState("");
    const [quantity, setQuantity] = useState("");
  
    // hook
    const navigate = useNavigate();
    useEffect(() => {
      loadCategories();
    }, []);
  
    const loadCategories = async () => {
      try {
        const { data } = await axios.get("/category");
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const productData = new FormData();
        productData.append("photo", photo);
        productData.append("name", name);
        productData.append("description", description);
        productData.append("price", price);
        productData.append("category", category);
        productData.append("shipping", shipping);
        productData.append("quantity", quantity);
  console.log(productData);
        const { data } = await axios.post("/create-product", productData);
        if (data?.error) {
          toast.error(data.error);
        } else {
          toast.success(`"${data.name}" is created`);
          navigate("/dashboard/admin/products");
        }
      } catch (err) {
        console.log(err);
        toast.error("Product create failed. Try again.");
      }
    };
  
    return (
        <>
       
  
       
          
            <div >
              <div className="p-3 mt-2 mb-2 h4 bg-light">Create Products</div>
  
              {photo && (
                <div className="text-center">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="product photo"
                    className="img img-responsive"
                    height="200px"
                  />
                </div>
              )}
  
              <div className="pt-2">
                <label className="btn btn-outline-secondary col-12 mb-3">
                  {photo ? photo.name : "Upload photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
  
              <input
                type="text"
                className="form-control p-2 mb-3"
                placeholder="Write a name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
  
              <textarea
                type="text"
                className="form-control p-2 mb-3"
                placeholder="Write a description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
  
              <input
                type="number"
                className="form-control p-2 mb-3"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
  
              <Select
                // showSearch
                bordered={false}
                size="large"
                className="form-select mb-3"
                placeholder="Choose category"
                onChange={(value) => setCategory(value)}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
  
              <Select
                bordered={false}
                size="large"
                className="form-select mb-3"
                placeholder="Choose shipping"
                onChange={(value) => setShipping(value)}
              >
                <Option value="0">No</Option>
                <Option value="1">Yes</Option>
              </Select>
  
              <input
                type="number"
                min="1"
                className="form-control p-2 mb-3"
                placeholder="Enter quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
  
              <button onClick={handleSubmit} className="btn btn-primary mb-5">
                Submit
              </button>
            </div>
         
      </>
    );
};

export default AdminProduct;
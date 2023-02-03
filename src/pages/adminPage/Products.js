import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

const AdminProducts=()=> {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const { data } = await axios.get("/list-products");
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      

        
          <div className="">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Products</div>

            {products?.map((p) => (
              <Link
              className="text-decoration-none"
                key={p._id}
                to={`/dashboard/admin/product/update/${p.slug}`}
              >
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={`${p.photoUrl}`}
                        alt={p.name}
                        className="img img-fluid rounded-start"
                      />
                    </div>

                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">{p.description}</p>
                        <p className="card-text">{p?.category?.name}</p>
                        <p className="card-text">
                          <small className="text-muted">
                            {moment(p.createdAt).format(
                              "MMMM Do YYYY, h:mm:ss a"
                            )}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        
    </>
  );
}

export default AdminProducts;
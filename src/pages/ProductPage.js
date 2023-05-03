import { Box, Button, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SectionHeader from "../components/SectionHeader";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { addToCart } from "../actions";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function ProductPage(props) {
  console.log(props);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const fetchSingleProduct = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const data = res.data;
    console.log(data);
    setProduct(data);
  };

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  const navigate = useNavigate();
  console.log(product, "product");

  return (
    <Box sx={{ width: "100%" }}>
      {Object.keys(product).length === 0 ? (
        <SectionHeader>
          <Box
            sx={{
              width: "100%",
              height: "85vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        </SectionHeader>
      ) : (
        <SectionHeader>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ padding: "30px" }}>
              <Box
                sx={{
                  width: "100%",
                  marginTop: "30px",
                  border: "1px solid rgb(240, 240, 240)",
                  padding: "20px 0px",
                  borderRadius: "7px",
                  backgroundColor: "white",
                  height: "70vh",
                  // border: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    //   width: "100%",
                    display: "flex",
                    //   border: 2,
                    justifyContent: "space-evenly",
                  }}
                >
                  {/* img box */}
                  {/* <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <img style={{ width: "150px", height: "150px" }} alt="" src="" />
        </Box> */}
                  {/* img box */}
                  <Box
                    sx={{
                      width: "30%",
                      borderRight: 1,
                      paddingRight: "20px",
                      position: "relative",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "contain",
                      }}
                      alt=""
                      src={product.image}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                      }}
                    >
                      <Button
                        style={{
                          textTransform: "none",
                          backgroundColor: "#ff9f00",
                          padding: "10px 40px",
                          display: "flex",
                          alignItems: "center",
                          color: "white",
                        }}
                        onClick={() => addProduct(product)}
                      >
                        <ShoppingCartIcon sx={{ marginRight: "5px" }} />
                        ADD TO CART
                      </Button>
                    </Box>

                    <Box
                      sx={{ position: "absolute", top: "-20px", left: "0px" }}
                    >
                      <Button
                        onClick={() => {
                          navigate("/");
                        }}
                        style={{
                          textTransform: "none",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {" "}
                        <ChevronLeftIcon /> Back{" "}
                      </Button>
                    </Box>
                  </Box>

                  <Box sx={{ width: "60%" }}>
                    {/* title box */}
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                        {/* Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops */}
                        {product.title}
                      </Typography>
                    </Box>

                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "10px",
                        }}
                      >
                        {/* rating box */}
                        <Box
                          sx={{
                            width: "60px",
                            height: "25px",
                            //   border: 1,
                            backgroundColor: "#388e3c",
                            borderRadius: "5px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Typography sx={{ color: "white", fontSize: "14px" }}>
                            {/* 4.4 */}
                            {product.rating.rate}
                          </Typography>
                          <StarIcon
                            sx={{
                              color: "white",
                              marginLeft: "7px",
                              fontSize: "20px",
                            }}
                          />
                        </Box>

                        <Box sx={{ marginLeft: "8px" }}>
                          <Typography
                            sx={{
                              color: "#878787",
                              fontWeight: 500,
                              fontSize: "13px",
                            }}
                          >
                            {/* 152 Ratings */}
                            {`${product.rating.count} Ratings`}
                          </Typography>
                        </Box>
                      </Box>

                      {/* money box */}

                      <Box sx={{ margin: "30px 0px" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <CurrencyRupeeIcon
                            sx={{ fontSize: "33px", marginRight: "0px" }}
                          />
                          <Typography
                            sx={{ fontWeight: 600, fontSize: "30px" }}
                          >
                            {product.price}
                          </Typography>
                        </Box>
                      </Box>

                      {/* desc box */}

                      <Box sx={{ marginTop: "10px" }}>
                        <Typography
                          sx={{ fontSize: "16px", lineHeight: "30px" }}
                        >
                          {/* Your perfect pack for everyday use and walks in the forest.
                Stash your laptop (up to 15 inches) in the padded sleeve, your
                everyday */}
                          {product.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* money box

                <Box sx={{ width: "20%" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CurrencyRupeeIcon />
                    <Typography>{product.price}</Typography>
                  </Box>
                </Box> */}
                </Box>
              </Box>
            </Box>
          </Box>
        </SectionHeader>
      )}
    </Box>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cart: state,
  };
};

export default connect(mapStateToProps, { addToCart })(ProductPage);

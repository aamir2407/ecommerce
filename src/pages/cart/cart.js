import React from "react";
import { fetchCart } from "../../actions";
import { Box, Button, Typography } from "@mui/material";
import SectionHeader from "../../components/SectionHeader";
import { useSelector, useDispatch } from "react-redux";
// import { delItem } from "../../redux/action/index";

import { delItem } from "../../redux/action";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { addCart } from "../../redux/action";
import { removeItem } from "../../redux/action";

export default function () {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  const removeProduct = (product) => {
    dispatch(removeItem(product));
  };

  const TotalPrice = Math.floor(
    state.length !== 0
      ? state
          .map((el) => {
            return {
              ...el,
              totalPrice: el.price * el.qty,
            };
          })
          .map((el) => el.totalPrice)
          .reduce((acc, curr) => acc + curr)
      : 0
  );

  console.log(state, "state", Math.ceil(TotalPrice));

  return (
    <Box sx={{ width: "100%" }}>
      <SectionHeader>
        {state.length === 0 ? (
          <Box
            sx={{
              minHeight: "70vh",
              padding: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: "20px", fontWeight: "bold", color: "#2874f0" }}
            >
              Empty Cart!!
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              minHeight: "70vh",
              padding: "30px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {state.map((item, index) => {
                  return (
                    <Box sx={{ width: "95%" }}>
                      <Box
                        sx={{
                          width: "100%",
                          // border: 1,
                          display: "flex",
                          // justifyContent: "space-between",
                          marginTop: "20px",
                          backgroundColor: "	#F5F5F5",
                          borderRadius: "6px",
                        }}
                      >
                        <Box
                          sx={{ width: "30%", borderRight: 1, padding: "20px" }}
                        >
                          {/* img box */}
                          <Box sx={{ width: "100%" }}>
                            <img
                              style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "contain",
                              }}
                              src={item.image}
                              alt=""
                            />
                          </Box>
                        </Box>
                        <Box sx={{ marginLeft: "10px", padding: "20px" }}>
                          <Typography
                            sx={{ fontSize: "20px", fontWeight: 400 }}
                          >
                            {item.title}
                          </Typography>
                          {/* ---------------------------- */}
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              columnGap: "5px",
                            }}
                          >
                            <Button
                              onClick={() => {
                                handleClose(item);
                              }}
                              style={{
                                fontSize: "30px",
                                padding: "0px",
                                borderRadius: "50%",
                              }}
                            >
                              -
                            </Button>

                            <Box>
                              <Typography style={{ fontWeight: "bold" }}>
                                {item.qty}
                              </Typography>
                            </Box>

                            <Button
                              style={{
                                fontSize: "30px",
                                padding: "0px",
                                borderRadius: "50%",
                              }}
                              onClick={() => addProduct(item)}
                            >
                              +
                            </Button>
                          </Box>

                          {/* ------------------------- */}

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              marginTop: "20px",
                            }}
                          >
                            <CurrencyRupeeIcon />
                            <Typography
                              sx={{ fontSize: "20px", fontWeight: 600 }}
                            >
                              {item.price}
                            </Typography>
                          </Box>

                          <Button
                            onClick={() => {
                              removeProduct(item);
                            }}
                            style={{ textTransform: "none", marginTop: "10px" }}
                          >
                            Remove
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box
                sx={{
                  width: "20%",
                  height: "100%",

                  boxShadow: "1px 1px 1px 1px rgba(0,0,0,.2)",
                  border: "1px solid #F5F5F5",
                  padding: "0px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "40px",
                    }}
                  >
                    <Box>
                      <Typography>Price</Typography>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <CurrencyRupeeIcon />
                        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                          {TotalPrice}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "40px",
                    }}
                  >
                    <Box>
                      <Typography>Delivery Charges</Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                        Free
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ borderTop: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                      marginBottom: "30px",
                    }}
                  >
                    <Box>
                      <Typography>Total Amount</Typography>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <CurrencyRupeeIcon />
                        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                          {TotalPrice}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </SectionHeader>
    </Box>
  );
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     cart: state.cart,
//   };
// };

// export default connect(mapStateToProps, { fetchCart })(Cart);

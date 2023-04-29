import React from "react";
import { fetchCart } from "../../actions";
import { Box, Button, Typography } from "@mui/material";
import SectionHeader from "../../components/SectionHeader";
import { useSelector, useDispatch } from "react-redux";
// import { delItem } from "../../redux/action/index";
import { NavLink } from "react-router-dom";
import { delItem } from "../../redux/action";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function () {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  console.log(state, "state");

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
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {state.map((item, index) => {
                return (
                  <Box sx={{ width: "50%" }}>
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
                        <Typography sx={{ fontSize: "20px", fontWeight: 400 }}>
                          {item.title}
                        </Typography>

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
                            handleClose(item);
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

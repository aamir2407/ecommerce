import { Typography, Button, TextField, Box } from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LanguageIcon from "@mui/icons-material/Language";

import styles from "./SectionHeader.module.css";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import SettingsIcon from "@mui/icons-material/Settings";
import ArticleIcon from "@mui/icons-material/Article";
import InputAdornment from "@mui/material/InputAdornment";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import PageFooter from "./PageFooter";
import { useSelector } from "react-redux";

export default function SectionHeader(props) {
  const state = useSelector((state) => state.handleCart);

  const navigate = useNavigate();
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{}} className={styles.header}>
        {/* <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          marginLeft: "3%",
          // marginLeft: "3%",
          // marginRight: "7%",
        }}
      >
       
        <Typography>MATICS</Typography>
      </Box> */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            className={styles.headerMainBox}
            sx={
              {
                // width: "60%",
                // display: "flex",
                // justifyContent: "space-between",
                //   border: 1,
              }
            }
          >
            <Box
              onClick={() => {
                navigate("/");
              }}
              sx={{ cursor: "pointer" }}
            >
              <Box>
                <img
                  style={{ width: "90px", height: "24px" }}
                  src="./images/logo.png"
                  alt=""
                />
              </Box>
            </Box>

            <Box sx={{ width: "30%" }}>
              <TextField
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "white",
                    padding: "6px",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #3A3A3A",
                  },
                  "& .MuiInputBase-input": {
                    fontSize: "14px",

                    border: "none",
                  },
                  "& .MuiOutlinedInput-input": { height: "0px" },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon
                        sx={{ color: "#2874f0", marginRight: "5px" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box sx={{ cursor: "pointer" }}>
              <Button
                style={{
                  backgroundColor: "white",
                  textTransform: "none",
                  padding: "5px 40px",
                }}
              >
                Login
              </Button>
            </Box>
            {/* <Link href="/aboutus">About us</Link> */}
            {/* ----------------------------------------------- */}
            <Box sx={{ cursor: "pointer" }}>
              <Button
                style={{
                  color: "white",
                  textTransform: "none",
                  fontSize: "16px",
                }}
              >
                Become a Seller
              </Button>
            </Box>

            <Box sx={{ cursor: "pointer" }}>
              <Button
                style={{
                  color: "white",
                  textTransform: "none",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                More
                <KeyboardArrowDownIcon />
              </Button>
            </Box>

            <Box sx={{ cursor: "pointer" }}>
              {/* <Typography
                sx={{ color: "white", fontSize: "16px", fontWeight: 500 }}
              >
                More
              </Typography> */}

              <Button
                onClick={() => {
                  navigate("/cart");
                }}
                style={{
                  color: "white",
                  textTransform: "none",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ShoppingCartIcon
                  sx={{ fontSize: "20px", marginRight: "5px" }}
                />
                Cart({state.length})
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{}}>{props.children}</Box>

      <Box sx={{ width: "100%" }}>
        <PageFooter />
      </Box>
    </Box>
  );
}

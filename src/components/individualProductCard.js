import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function IndividualProductCard(props) {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "30px",
        border: "1px solid rgb(240, 240, 240)",
        padding: "20px 0px",
        borderRadius: "7px",
        backgroundColor: "white",
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
        <Box sx={{ width: "20%", borderRight: 1, paddingRight: "20px" }}>
          <img
            style={{ width: "100%", height: "200px", objectFit: "contain" }}
            alt=""
            src={props.image}
          />
        </Box>

        <Box sx={{ width: "40%" }}>
          {/* title box */}
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
              {/* Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops */}
              {props.title}
            </Typography>
          </Box>

          <Box>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
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
                  {props.rating}
                </Typography>
                <StarIcon
                  sx={{ color: "white", marginLeft: "7px", fontSize: "20px" }}
                />
              </Box>

              <Box sx={{ marginLeft: "8px" }}>
                <Typography
                  sx={{ color: "#878787", fontWeight: 500, fontSize: "13px" }}
                >
                  {/* 152 Ratings */}
                  {`${props.noOfRating} Ratings`}
                </Typography>
              </Box>
            </Box>

            {/* desc box */}

            <Box sx={{ marginTop: "10px" }}>
              <Typography sx={{ fontSize: "13px" }}>
                {/* Your perfect pack for everyday use and walks in the forest.
                Stash your laptop (up to 15 inches) in the padded sleeve, your
                everyday */}
                {props.description}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* money box */}

        <Box sx={{ width: "20%" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CurrencyRupeeIcon />
            <Typography>{props.cost}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

import { Box, Button, Typography } from "@mui/material";
import SectionHeader from "../../components/SectionHeader";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import IndividualProductCard from "../../components/individualProductCard";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../actions";
import { connect, useSelector } from "react-redux";

function LandingPage() {
  const [allProducts, setAllProducts] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState([]);

  const ref = useRef([]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    let data = res.data;

    setAllProducts(data);
  };

  //const isSameCategory = (currentValue) => currentValue;

  const filteredDATA = allProducts.filter((item) =>
    filters.length > 0 ? filters.includes(item.category) : allProducts
  );

  const applyFilter = (event) => {
    if (event.target.checked) {
      setFilters([...filters, event.target.value]);
    } else {
      setFilters(
        filters.filter((filterTag) => filterTag !== event.target.value)
      );
    }
  };

  useEffect(() => {
    getProducts();
  }, [allProducts]);

  //console.log(allProducts);

  const Unchecked = () => {
    console.log(ref.current.length);
    for (let i = 0; i < ref.current.length; i++) {
      ref.current[i].checked = false;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <SectionHeader>
        <Box sx={{ width: "100%" }}>
          {/* filtering option box */}

          <Box
            sx={{
              //   width: "100%",
              //   border: 1,
              //   backgroundColor: "grey",
              padding: "30px",
              display: "flex",
              justifyContent: "space-evenly",
              boxShadow: "0 1px 1px 0 rgba(0,0,0,.16)",
              backgroundColor: "white",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Electronics</Typography>
              <input
                ref={(element) => {
                  ref.current[0] = element;
                }}
                type="checkbox"
                value="electronics"
                onChange={(evt) => applyFilter(evt)}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Jewelery</Typography>
              <input
                ref={(element) => {
                  ref.current[1] = element;
                }}
                type="checkbox"
                value="jewelery"
                onChange={(evt) => applyFilter(evt)}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Men's clothing</Typography>
              <input
                ref={(element) => {
                  ref.current[2] = element;
                }}
                type="checkbox"
                value="men's clothing"
                onChange={(evt) => applyFilter(evt)}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Women's clothing</Typography>
              <input
                ref={(element) => {
                  ref.current[3] = element;
                }}
                type="checkbox"
                value="women's clothing"
                onChange={(evt) => applyFilter(evt)}
              />
            </Box>

            <Button
              onClick={() => {
                Unchecked();
                setFilters([]);
              }}
              style={{
                textTransform: "none",
                border: "1px solid #2874f0",
                backgroundColor: "#2874f0",
                color: "white",
                padding: "3px 30px",
              }}
            >
              Reset
            </Button>
          </Box>

          {/* product listing box */}

          <Box sx={{ padding: "50px 70px" }}>
            {allProducts.length === 0 ? (
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
            ) : (
              filteredDATA.map((item, index) => {
                return (
                  <Link
                    key={item.id}
                    to={`/${item.id}`}
                    style={{ textDecoration: "none", color: "#050742" }}
                  >
                    <IndividualProductCard
                      image={item.image}
                      title={item.title}
                      rating={item.rating.rate}
                      noOfRating={item.rating.count}
                      description={item.description}
                      cost={item.price}
                    />
                  </Link>
                );
              })
            )}

            {/* <IndividualProductCard
              image
              title
              rating
              noOfRating
              description
              cost
            /> */}
          </Box>
        </Box>
      </SectionHeader>
    </Box>
  );
}

//export default connect(null, { getProducts })(LandingPage);
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getAllProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

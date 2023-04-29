import { Box, Typography } from "@mui/material";
import styles from "./PageFooter.module.css";

export default function PageFooter() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          // border: 1,
          backgroundColor: "#2874f0",
        }}
      >
        <Box className={styles.footerContentBox}>
          <Box className={styles.appLinksBox}>
            <Box>
              <Typography className={styles.linkHeading}>ABOUT</Typography>

              <Typography className={styles.linkTypoTop}>Contact us</Typography>

              <Typography className={styles.linkTypo}>About us</Typography>

              <Typography className={styles.linkTypo}>Careers</Typography>

              <Typography className={styles.linkTypo}>
                Flipkart stories
              </Typography>

              <Typography className={styles.linkTypo}>Press</Typography>

              <Typography className={styles.linkTypo}>Corporate</Typography>
            </Box>
            {/* ------------- */}
            <Box sx={{}}>
              <Typography className={styles.linkHeading}>HELP</Typography>

              <Typography className={styles.linkTypoTop}>Payment</Typography>

              <Typography className={styles.linkTypo}>Shipping</Typography>

              <Typography className={styles.linkTypo}>FAQ</Typography>

              <Typography className={styles.linkTypo}>Returns</Typography>

              <Typography className={styles.linkTypo}>Report</Typography>
            </Box>
            {/* ------------- */}
            {/* ------------- */}
            <Box sx={{}}>
              <Typography className={styles.linkHeading}>POLICY</Typography>

              <Typography className={styles.linkTypoTop}>Return</Typography>

              <Typography className={styles.linkTypo}>Security</Typography>

              <Typography className={styles.linkTypo}>Privacy</Typography>
            </Box>
            {/* ------------- */}
            <Box sx={{}}>
              <Typography className={styles.linkHeading}>SOCIAL</Typography>

              <Typography className={styles.linkTypoTop}>Facebook</Typography>

              <Typography className={styles.linkTypo}>Twitter</Typography>

              <Typography className={styles.linkTypo}>Youtube</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

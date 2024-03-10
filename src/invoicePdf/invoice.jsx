import {
  Page,
  Text,
  Document,
  StyleSheet,
  Image,
  View,
  Font,
} from "@react-pdf/renderer";
import formateDate from "../services/formateDate";
import { roboto_bold, roboto_medium, roboto_medium_italic, roboto_regular } from "./fonts";


Font.register({
  family: 'Sacramento',
  src: 'https://fonts.gstatic.com/s/sacramento/v4/WFDkXpubrEwopJnSlHV6CC3USBnSvpkopQaUR-2r7iU.ttf',
});



// Create styles
const styles = StyleSheet.create({
  page: {
    // fontFamily: "Roboto",
  },
  container: {
    display: "flex",
    position: "absolute",
    top: 0,
    left: 0,
    gap: 0,
    flexDirection: "row",
    transform: "rotate(30deg) translateX(-220px) translateY(-115px)",
    zIndex: "10",
  },
  viewOne: {
    width: "120px",
    height: "100vh",
    backgroundColor: "rgb(221, 221, 221)",
    position: "relative",
    transform: "translateX(2px)",
  },
  viewTwo: {
    width: "120px",
    height: "100vh",
    backgroundColor: "rgb(227, 227, 228)",
    transform: "translateX(1px)",
  },
  viewThree: {
    width: "120px",
    height: "100vh",
    backgroundColor: "rgb(245, 245, 245)",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  headerLeft: {
    zIndex: 1000,
    marginLeft: "30px",
    marginTop: "30px",
    display: "flex",
    justifyContent: "space-between",

    flexDirection: "column",
  },
  headerLeftMain: {
    color: "rgb(0, 0, 0)",
    fontSize: "41px",
    fontWeight: "heavy",
  },
  headerLeftMainTexts: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "10px",
    marginLeft: "3px",
  },
  headerLeftMainText: {
    color: "rgb(0, 0, 0)",
    fontSize: "12px",
    fontWeight: "bold",
  },

  headerLeftMainTextsCol: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    marginTop: "50px",
    marginLeft: "3px",
  },
  headerLeftMainTextCol: {
    color: "black",
    marginBottom: "10px",
    fontSize: "16px",
    fontWeight: "medium",
  },

  headerLeftMainTextColAddress: {
    fontSize: "13px",
    color: "rgb(27, 27, 27)",
    width: "150px",
    lineHeight: "1.3",
    marginBottom: "10px",
    marginTop: "15px",
  },
  imageCompany: {
    width: "70px",
    height: "70px",

    borderRadius: "50%",
  },
  headerRight: {
    display: "flex",
    marginRight: "40px",
    marginTop: "30px",
    alignItems: "center",
    flexDirection: "row",
    gap: "20px",
    position: "relative",
    top: "40px",
  },

  headerRightMainText: {
    color: "#ff8800",
    fontSize: "30px",
    fontWeight: "medium",
  },
  table: {
    marginTop: "50px",
  },
  tableHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    fontSize: "14px",
    width: "100%",
    marginBottom: "10px",
    borderBottom: "1px solid green",
    paddingBottom: "5px",
    color: "#1d4ff3",
    gap: "25px",
    paddingLeft: "40px",
    paddingRight: "40px",
  },
  tableBody: {
    paddingLeft: "40px",
    paddingRight: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    fontSize: "14px",
    width: "100%",
    marginBottom: "10px",
    paddingBottom: "5px",
    borderBottom: "1px solid green",
    gap: "25px",
  },
  tableFooter: {
    paddingLeft: "40px",
    paddingRight: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    fontSize: "14px",
    width: "100%",
    marginBottom: "10px",
    paddingBottom: "5px",
    gap: "25px",
  },
  tableText: {
    textAlign: "center",
  },
  PaymentStatus: {
    position: "absolute",
    top: "20%",
    right: "0",
  },
  PaymentStatusText: {
    color: "black",
    padding: "30px",
    backgroundColor: "#17f762",
    fontWeight: "medium",
    borderRadius: "10px",
    fontStyle: "italic",
  },
  PaymentStatusTextRed: {
    color: "black",
    padding: "30px",
    backgroundColor: "#f71717",
    fontWeight: "medium",
    borderRadius: "10px",
    width: "60%",
    fontStyle: "italic",
  },
  jarImageOne: {
    position: "absolute",
    bottom: "20px",
    left: "50px",
    width: "150px",
    backgroundColor: "#f7f736",
    borderRadius: "50%",
    padding: "10px",
    transform: "rotate(-28deg)",
  },
  jarImageTwo: {
    position: "absolute",
    bottom: "20px",
    right: "50px",
    width: "150px",
    backgroundColor: "rgb(247, 247, 54)",
    borderRadius: "50%",
    padding: "10px",
    transform: "rotate(28deg)",
  },
  footerText: {
    textAlign: "center",
    width: "180px",
    margin: "auto",
    marginTop: "70px",

  },
  signature: {
    fontSize: "20px",
    marginTop: "40px",
    marginHorizontal: "auto",
    width: "50px",
    borderBottom: "1px solid blue",
    fontFamily: "Sacramento",
  },
  nitroImage: {
    position: "absolute",
    top: "30px",
    right: "40px",
    backgroundColor: "green",
    width: "130px",
    zIndex: "-10000000",
    borderRadius: "50%",
  },
});

// Create Document Component
const MyDocument = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.viewOne}></View>
          <View style={styles.viewTwo}></View>
          <View style={styles.viewThree}></View>
        </View>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.headerLeftMain}>INVOICE</Text>
            <View style={styles.headerLeftMainTexts}>
              <Text style={styles.headerLeftMainText}>Date</Text>
              <Text style={styles.headerLeftMainText}>
                {formateDate(data.created_at)}
              </Text>
            </View>
            <View style={styles.headerLeftMainTextsCol}>
              <Text style={styles.headerLeftMainTextCol}>
                Name: {data.customer_name || "N/A"}
              </Text>
              <Text style={styles.headerLeftMainTextCol}>
                Phone: {data.customer_phone || "N/A"}
              </Text>
              <Text style={styles.headerLeftMainTextCol}>
                Email: {data.customer_email || "N/A"}
              </Text>
              <Text style={styles.headerLeftMainTextColAddress}>
                Address: {data.customer_address || "N/A"}
              </Text>

              <Text style={styles.headerLeftMainTextColAddress}>
                {data?.customer_comment
                  ? data?.customer_comment
                  : "Additional Information: N/A"}
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.headerRight}>
              <Image
                src={"./imgs/shop.jpg"}
                style={styles.imageCompany}
              ></Image>
              <Text style={styles.headerRightMainText}>Start Up</Text>
            </View>
          </View>
        </View>

        <View style={styles.PaymentStatus}>
          {data.paid ? (
            <Text style={styles.PaymentStatusText}>
              Payment Status: PAID ✅
            </Text>
          ) : (
            <Text style={styles.PaymentStatusTextRed}>
              Payment Status: UNPAID ❌
            </Text>
          )}
        </View>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={{ width: "20px" }}>S/N</Text>
            <Text style={{ width: "70px" }}>Quantity</Text>
            <Text style={{ width: "320px" }}>Product Name</Text>
            <Text style={{ width: "100px" }}>Price</Text>
          </View>

          {JSON.parse(data.products).map((item, index) => (
            <View key={index} style={styles.tableBody}>
              <Text style={{ width: "20px" }}>{index + 1}</Text>
              <Text style={{ width: "70px" }}>{item.count}</Text>
              <Text style={{ width: "320px" }}>{item.name}</Text>
              <Text style={{ width: "100px" }}>{item.price} BDT</Text>
            </View>
          ))}
          <View style={styles.tableBody}>
            <Text style={{ width: "20px" }}></Text>
            <Text style={{ width: "70px" }}></Text>
            <Text style={{ width: "320px" }}>Total Product Price</Text>
            <Text style={{ width: "100px" }}>{data.total_price} BDT</Text>
          </View>
          <View style={styles.tableBody}>
            <Text style={{ width: "20px" }}></Text>
            <Text style={{ width: "70px" }}></Text>
            <Text style={{ width: "320px" }}>Delivery Cost</Text>
            <Text style={{ width: "100px" }}>{data.delivery_cost} BDT</Text>
          </View>

          <View style={styles.tableFooter}>
            <Text style={{ width: "20px" }}></Text>
            <Text style={{ width: "70px" }}></Text>
            <Text style={{ width: "320px" }}>Total</Text>
            <Text style={{ width: "100px" }}>
              {Number(data.total_price) + Number(data.delivery_cost)} BDT
            </Text>
          </View>
        </View>
        <View style={styles.footerText}>
          <Text>Thank you for buying our products</Text>
          <Text style={styles.signature}>startup</Text>
        </View>

        <Text
          style={{
            position: "absolute",
            bottom: "5px",
            right: "5px",
            fontSize: "6px",
            opacity: "0.3",
            color: "black",
          }}
        >
          {data.created_at}
        </Text>
      </Page>
    </Document>
  );
};

export default MyDocument;

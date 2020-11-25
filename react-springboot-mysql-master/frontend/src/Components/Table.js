import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
// import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FlightIcon from "@material-ui/icons/Flight";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 600,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: `10px`,
    height: "100%",
    width: "99%",
    marginTop: theme.spacing(7),
  },
  link: {
    color: "rgba(0,0,0,0.65)",
    textDecoration: "none",
    marginLeft: "10%",
    alignSelf: "flex-start",
    "&:hover": {
      color: "rgba(0,0,0,1)",
    },
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function SimpleTable() {
  const classes = useStyles();

  const [data, upDateData] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);

  const [dataNum, setDataNum] = React.useState("");
  const [gate, setGate] = React.useState("");
  const [desti, setDestination] = React.useState("");
  const [searchArr, setArr] = React.useState([]);
  const [dataSearch, setChange] = React.useState({
    data1: "",
    data2: "",
    data3: "",
  });
  let isLoading = true;

  async function sampleFunc() {
    let response = await fetch("/api/flight");
    let body = await response.json();
    upDateData(body);
    console.log(body);
  }

  //todo: this 3 functions get data from search boxes
  const searchFlightNumber = (event) => setDataNum(event.target.value);
  const searchDestination = (event) => setDestination(event.target.value);
  const searchGate = (event) => setGate(event.target.value);

  //todo this function run when people click search
  function searchClick() {
    let temp = [];
    if (dataNum !== "" && gate !== "" && desti !== "") {
      data.map((x) => {
        if (
          x.flightNumber === dataNum &&
          x.gate === gate &&
          x.destination === desti
        ) {
          temp.push(x);
          console.log(x);
        }
      });
    } else if (dataNum !== "" && gate !== "") {
      data.map((x) => {
        if (x.flightNumber === dataNum && x.gate === gate) {
          temp.push(x);
          console.log(x);
        }
      });
    } else if (gate !== "" && desti !== "") {
      console.log("Got here");
      data.map((x) => {
        if (x.gate === gate && x.destination === desti) {
          temp.push(x);
          console.log(x);
        }
      });
    } else if (dataNum !== "" && desti !== "") {
      data.map((x) => {
        if (x.flightNumber === dataNum && x.destination === desti) {
          temp.push(x);
          console.log(x);
        }
      });
    } else if (dataNum !== "") {
      console.log("check in dataNum ");
      data.map((x) => {
        if (x.flightNumber === dataNum) {
          temp.push(x);
          console.log(x);
        }
        console.log("temp: ", temp);
      });
    } else if (gate !== "") {
      data.map((x) => {
        if (x.gate === gate) {
          temp.push(x);
          console.log(x);
        }
      });
    } else if (desti !== "") {
      data.map((x) => {
        if (x.destination === desti) {
          temp.push(x);
          console.log(x);
        }
      });
    }

    console.log(temp);
    setArr(temp);
    setChange({
      data1: dataNum,
      data2: gate,
      data3: desti,
    });
  }

  function reset() {
    setChange({
      data1: "",
      data2: "",
      data3: "",
    });
    setArr([]);
  }

  if (firstLoad) {
    sampleFunc();
    setLoad(false);
  }

  //todo: let we have an alternate data to display when people search or not
  let displayData = data;
  if (
    (dataSearch.data1 !== "" ||
      dataSearch.data2 !== "" ||
      dataSearch.data3 !== "") &&
    searchArr.length === 0
  ) {
    console.log("search but nothing match");
    displayData = [];
  } else if (
    (dataSearch.data1 !== "" ||
      dataSearch.data2 !== "" ||
      dataSearch.data3 !== "") &&
    searchArr.length !== 0
  ) {
    console.log("search and something matches");
    console.log(searchArr);
    displayData = searchArr;
  }

  if (displayData.length > 0) isLoading = false;

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <FlightIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        SFO Flight Schedule on November 30, 2020
      </Typography>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Flight number"
          variant="outlined"
          onChange={searchFlightNumber}
        />
        <TextField
          id="outlined-basic"
          label="Destination"
          variant="outlined"
          onChange={searchDestination}
        />
        <TextField
          id="outlined-basic"
          label="Gate"
          variant="outlined"
          onChange={searchGate}
        />
        <Button
          variant="contained"
          color="primary"
          className="searchBtn"
          onClick={searchClick}
        >
          Search
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="searchBtn"
          onClick={reset}
        >
          Reset
        </Button>
      </form>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <TableContainer
          style={{ width: "80%", margin: "60px 10px" }}
          component={Paper}
        >
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Airline</TableCell>
                <TableCell align="center">Flight Number</TableCell>
                <TableCell align="center">Destination</TableCell>
                <TableCell align="center">Gate</TableCell>
                <TableCell align="center">Departure Time</TableCell>
                <TableCell align="center">Arrival Time</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayData?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.airline}</TableCell>
                  <TableCell align="center">{row.flightNumber}</TableCell>
                  <TableCell align="center">{row.destination}</TableCell>
                  <TableCell align="center">{row.gate}</TableCell>
                  <TableCell align="center">{row.departureTime}</TableCell>
                  <TableCell align="center">{row.arrivalTime}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Link className={classes.link} to="/">
        {" "}
        <Typography align="left">&#x2190; Search</Typography>{" "}
      </Link>
    </div>
  );
}

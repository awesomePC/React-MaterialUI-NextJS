import React from "react";
import Head from "next/head";
import Lottie from "react-lottie";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import integrationAnimation from "../src/animations/integrationAnimation/data.json";

import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">Mobile Apps Development iOS/Android - Demo</title>
        <meta
          name="description"
          key="description"
          content="Mobile Apps Made Easy | Our app development process lets you custom design your own website and mobile apps."
        />
        <meta
          property="og:title"
          content="Bringin West Coast Technology to the Midwest | iOS/Android App Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="/mobileapps" />
        <link rel="canonical" key="canonical" href="/mobileapps" />
      </Head>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        {/* Back arrow grid */}
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              component={Link}
              href="/customsoftware"
              style={{ backgroundColor: "transparent" }}
              onClick={() => props.setSelectedIndex(1)}
            >
              <img
                src="/assets/backArrow.svg"
                alt="Back to Custom Software Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
        {/* Main Contents */}
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h1">
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              href="/websites"
              style={{ backgroundColor: "transparent" }}
              onClick={() => props.setSelectedIndex(3)}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="Forward to Website Development Page"
              />
            </IconButton>
          </Grid>
          {/* End of Grid Container that contains arrows and content */}
        </Hidden>
      </Grid>
      {/* Integration section */}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body1"
              paragraph
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth: "20em" }} />
        </Grid>
        {/* Simultaneous block */}
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="h4"
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="body1"
              paragraph
            >
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* Only ICONS Block  */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginBottom: "15em" }}
      >
        {/* Extend Functionality */}
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/swissKnife.svg" alt="swiss army knife" />
          </Grid>
        </Grid>
        {/* Extend Access */}
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{
            marginTop: matchesMD ? "10em" : 0,
            marginBottom: matchesMD ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src="/assets/extendAccess.svg"
              alt="tear-one-off sign"
              style={{ maxWidth: matchesXS ? "20em" : "40em" }}
            />
          </Grid>
        </Grid>
        {/* Increase Engagement */}
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img
              src="/assets/increaseEngagement.svg"
              alt="app with notificaton"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}

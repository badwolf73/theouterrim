import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import Dashboard from "../components/shared/Dashboard"
import FlareIcon from "@material-ui/icons/Flare"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Link from "../components/shared/Link"
import SEO from "../components/shared/SEO"
import Title from "../components/shared/Title"
import { ThemeProvider } from "../components/shared/ThemeContext"

const contributors = [
  "P-47 Thunderbolt",
  "Andre L.",
  "Brad K.",
  "Alex H.",
  "Tailball",
  "Xunrel",
  "Sportsviking",
  "Snarester68",
  "bushikatagi",
  "LittlestMinish",
]

const Contributors = () => {
  return (
    <ThemeProvider>
      <Dashboard>
        <SEO title="Contributors" />
        <Grid container item xs={12}>
          <Title>Contributors</Title>
          <Typography component="p" gutterBottom>
            A very big thank you to all of the contributors to the site! These
            people have contributed code on{" "}
            <Link component="a" href="https://github.com/duffn/theouterrim">
              GitHub
            </Link>{" "}
            or painstakingly audited and contributed content. This site would
            not be what it is without you.
          </Typography>
          <List>
            {contributors.map((contributor, index) => {
              return (
                <ListItem key={index}>
                  <ListItemIcon>
                    <FlareIcon />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography type="body2" style={{ fontSize: "1.5rem" }}>
                        {contributor}
                      </Typography>
                    }
                  />
                </ListItem>
              )
            })}
          </List>
        </Grid>
      </Dashboard>
    </ThemeProvider>
  )
}

export default Contributors

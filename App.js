import React from "react";
import "react-native-gesture-handler";
import Router from "./src/navigation/router";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { AmplifyTheme } from "aws-amplify-react-native";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
import { withAuthenticator } from "aws-amplify-react-native";

const App = () => {
  return <Router />;
};

export default withAuthenticator(App);

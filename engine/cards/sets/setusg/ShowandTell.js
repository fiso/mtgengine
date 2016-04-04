"use strict";
const Constants = require ("../../../Constants");
const ShowandTellBase = require("../setpJGP/ShowandTell");

class ShowandTell extends ShowandTellBase {
  constructor(game) {
    super(game, "Show and Tell", "Urza's Saga", "USG");
  }
}

module.exports = ShowandTell;

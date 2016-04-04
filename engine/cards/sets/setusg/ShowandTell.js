"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShowandTellBase = require("../setpJGP/ShowandTell.js");

class ShowandTell extends ShowandTellBase {
  constructor(game) {
    super(game, "Show and Tell", "Urza's Saga", "USG");
  }
}

module.exports = ShowandTell;

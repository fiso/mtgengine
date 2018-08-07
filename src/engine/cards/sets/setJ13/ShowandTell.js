"use strict";
const Constants = require ("../../../Constants");
const ShowandTellBase = require("../setCN2/ShowandTell");

class ShowandTell extends ShowandTellBase {
  constructor (game) {
    super(game, "Show and Tell", "Judge Gift Cards 2013", "J13");
  }
}

module.exports = ShowandTell;

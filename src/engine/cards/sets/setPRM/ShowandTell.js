"use strict";
const Constants = require ("../../../Constants");
const ShowandTellBase = require("../setCN2/ShowandTell");

class ShowandTell extends ShowandTellBase {
  constructor (game) {
    super(game, "Show and Tell", "Magic Online Promos", "PRM");
  }
}

module.exports = ShowandTell;

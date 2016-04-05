"use strict";
const Constants = require ("../../../Constants");
const StreetSpasmBase = require("../setC13/StreetSpasm");

class StreetSpasm extends StreetSpasmBase {
  constructor(game) {
    super(game, "Street Spasm", "Return to Ravnica", "RTR");
  }
}

module.exports = StreetSpasm;

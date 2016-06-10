"use strict";
const Constants = require ("../../../Constants");
const PrecinctCaptainBase = require("../setDDO/PrecinctCaptain");

class PrecinctCaptain extends PrecinctCaptainBase {
  constructor (game) {
    super(game, "Precinct Captain", "Return to Ravnica", "RTR");
  }
}

module.exports = PrecinctCaptain;

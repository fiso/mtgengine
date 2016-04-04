"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrecinctCaptainBase = require("../setDDO/PrecinctCaptain.js");

class PrecinctCaptain extends PrecinctCaptainBase {
  constructor(game) {
    super(game, "Precinct Captain", "Return to Ravnica", "RTR");
  }
}

module.exports = PrecinctCaptain;

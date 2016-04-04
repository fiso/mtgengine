"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RakdosCacklerBase = require("../setpFNM/RakdosCackler.js");

class RakdosCackler extends RakdosCacklerBase {
  constructor(game) {
    super(game, "Rakdos Cackler", "Return to Ravnica", "RTR");
  }
}

module.exports = RakdosCackler;

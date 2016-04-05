"use strict";
const Constants = require ("../../../Constants");
const RakdosCacklerBase = require("../setpFNM/RakdosCackler");

class RakdosCackler extends RakdosCacklerBase {
  constructor(game) {
    super(game, "Rakdos Cackler", "Return to Ravnica", "RTR");
  }
}

module.exports = RakdosCackler;

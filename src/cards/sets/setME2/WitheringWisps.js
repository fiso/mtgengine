"use strict";
const Constants = require ("../../../Constants");
const WitheringWispsBase = require("../setICE/WitheringWisps");

class WitheringWisps extends WitheringWispsBase {
  constructor(game) {
    super(game, "Withering Wisps", "Masters Edition II", "ME2");
  }
}

module.exports = WitheringWisps;

"use strict";
const Constants = require ("../../../Constants");
const WitheringWispsBase = require("../setME2/WitheringWisps");

class WitheringWisps extends WitheringWispsBase {
  constructor (game) {
    super(game, "Withering Wisps", "Ice Age", "ICE");
  }
}

module.exports = WitheringWisps;

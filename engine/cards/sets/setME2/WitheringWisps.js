"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WitheringWispsBase = require("../setICE/WitheringWisps.js");

class WitheringWisps extends WitheringWispsBase {
  constructor(game) {
    super(game, "Withering Wisps", "Masters Edition II", "ME2");
  }
}

module.exports = WitheringWisps;

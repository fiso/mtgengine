"use strict";
const Constants = require ("../../../Constants");
const RishadanPortBase = require("../setA25/RishadanPort");

class RishadanPort extends RishadanPortBase {
  constructor (game) {
    super(game, "Rishadan Port", "Judge Gift Cards 2015", "J15");
  }
}

module.exports = RishadanPort;

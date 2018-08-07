"use strict";
const Constants = require ("../../../Constants");
const RishadanPortBase = require("../setA25/RishadanPort");

class RishadanPort extends RishadanPortBase {
  constructor (game) {
    super(game, "Rishadan Port", "Mercadian Masques", "MMQ");
  }
}

module.exports = RishadanPort;

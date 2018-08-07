"use strict";
const Constants = require ("../../../Constants");
const MarrowBatsBase = require("../setC13/MarrowBats");

class MarrowBats extends MarrowBatsBase {
  constructor (game) {
    super(game, "Marrow Bats", "Avacyn Restored", "AVR");
  }
}

module.exports = MarrowBats;

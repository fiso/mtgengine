"use strict";
const Constants = require ("../../../Constants");
const MaroBase = require("../set6ED/Maro");

class Maro extends MaroBase {
  constructor (game) {
    super(game, "Maro", "Seventh Edition", "7ED");
  }
}

module.exports = Maro;

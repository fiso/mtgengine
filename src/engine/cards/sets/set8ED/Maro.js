"use strict";
const Constants = require ("../../../Constants");
const MaroBase = require("../set9ED/Maro");

class Maro extends MaroBase {
  constructor (game) {
    super(game, "Maro", "Eighth Edition", "8ED");
  }
}

module.exports = Maro;

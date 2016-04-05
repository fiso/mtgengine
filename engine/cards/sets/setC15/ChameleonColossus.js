"use strict";
const Constants = require ("../../../Constants");
const ChameleonColossusBase = require("../setARC/ChameleonColossus");

class ChameleonColossus extends ChameleonColossusBase {
  constructor(game) {
    super(game, "Chameleon Colossus", "Commander 2015", "C15");
  }
}

module.exports = ChameleonColossus;

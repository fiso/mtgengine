"use strict";
const Constants = require ("../../../Constants");
const ChameleonColossusBase = require("../setC15/ChameleonColossus");

class ChameleonColossus extends ChameleonColossusBase {
  constructor (game) {
    super(game, "Chameleon Colossus", "Morningtide", "MOR");
  }
}

module.exports = ChameleonColossus;

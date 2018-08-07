"use strict";
const Constants = require ("../../../Constants");
const EtheriumHornSorcererBase = require("../setC17/EtheriumHornSorcerer");

class EtheriumHornSorcerer extends EtheriumHornSorcererBase {
  constructor (game) {
    super(game, "Etherium-Horn Sorcerer", "Planechase 2012", "PC2");
  }
}

module.exports = EtheriumHornSorcerer;

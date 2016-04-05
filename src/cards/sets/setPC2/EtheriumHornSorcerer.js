"use strict";
const Constants = require ("../../../Constants");
const EtheriumHornSorcererBase = require("../setC15/EtheriumHornSorcerer");

class EtheriumHornSorcerer extends EtheriumHornSorcererBase {
  constructor(game) {
    super(game, "Etherium-Horn Sorcerer", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = EtheriumHornSorcerer;

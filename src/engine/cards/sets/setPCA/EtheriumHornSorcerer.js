"use strict";
const Constants = require ("../../../Constants");
const EtheriumHornSorcererBase = require("../setC17/EtheriumHornSorcerer");

class EtheriumHornSorcerer extends EtheriumHornSorcererBase {
  constructor (game) {
    super(game, "Etherium-Horn Sorcerer", "Planechase Anthology", "PCA");
  }
}

module.exports = EtheriumHornSorcerer;

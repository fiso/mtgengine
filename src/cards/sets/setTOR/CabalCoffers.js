"use strict";
const Constants = require ("../../../Constants");
const CabalCoffersBase = require("../setHOP/CabalCoffers");

class CabalCoffers extends CabalCoffersBase {
  constructor (game) {
    super(game, "Cabal Coffers", "Torment", "TOR");
  }
}

module.exports = CabalCoffers;

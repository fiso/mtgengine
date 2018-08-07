"use strict";
const Constants = require ("../../../Constants");
const CabalCoffersBase = require("../setHOP/CabalCoffers");

class CabalCoffers extends CabalCoffersBase {
  constructor (game) {
    super(game, "Cabal Coffers", "Magic Online Promos", "PRM");
  }
}

module.exports = CabalCoffers;

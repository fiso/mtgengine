"use strict";
const Constants = require ("../../../Constants");
const CabalCoffersBase = require("../setHOP/CabalCoffers");

class CabalCoffers extends CabalCoffersBase {
  constructor (game) {
    super(game, "Cabal Coffers", "Friday Night Magic 2007", "F07");
  }
}

module.exports = CabalCoffers;

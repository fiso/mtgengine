"use strict";
const Constants = require ("../../../Constants");
const ChainsofMephistophelesBase = require("../setLEG/ChainsofMephistopheles");

class ChainsofMephistopheles extends ChainsofMephistophelesBase {
  constructor (game) {
    super(game, "Chains of Mephistopheles", "Masters Edition", "MED");
  }
}

module.exports = ChainsofMephistopheles;

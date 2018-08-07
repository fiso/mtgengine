"use strict";
const Constants = require ("../../../Constants");
const ChainsofMephistophelesBase = require("../setMED/ChainsofMephistopheles");

class ChainsofMephistopheles extends ChainsofMephistophelesBase {
  constructor (game) {
    super(game, "Chains of Mephistopheles", "Magic Online Promos", "PRM");
  }
}

module.exports = ChainsofMephistopheles;

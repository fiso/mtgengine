"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChainsofMephistophelesBase = require("../setLEG/ChainsofMephistopheles.js");

class ChainsofMephistopheles extends ChainsofMephistophelesBase {
  constructor(game) {
    super(game, "Chains of Mephistopheles", "Masters Edition", "MED");
  }
}

module.exports = ChainsofMephistopheles;

"use strict";
const Constants = require ("../../../Constants");
const GrimLavamancerBase = require("../setE01/GrimLavamancer");

class GrimLavamancer extends GrimLavamancerBase {
  constructor (game) {
    super(game, "Grim Lavamancer", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = GrimLavamancer;

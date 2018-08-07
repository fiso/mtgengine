"use strict";
const Constants = require ("../../../Constants");
const GrimLavamancerBase = require("../setE01/GrimLavamancer");

class GrimLavamancer extends GrimLavamancerBase {
  constructor (game) {
    super(game, "Grim Lavamancer", "Magic Online Promos", "PRM");
  }
}

module.exports = GrimLavamancer;

"use strict";
const Constants = require ("../../../Constants");
const GrimLavamancerBase = require("../setpJGP/GrimLavamancer");

class GrimLavamancer extends GrimLavamancerBase {
  constructor (game) {
    super(game, "Grim Lavamancer", "Torment", "TOR");
  }
}

module.exports = GrimLavamancer;

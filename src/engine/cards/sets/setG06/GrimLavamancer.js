"use strict";
const Constants = require ("../../../Constants");
const GrimLavamancerBase = require("../setE01/GrimLavamancer");

class GrimLavamancer extends GrimLavamancerBase {
  constructor (game) {
    super(game, "Grim Lavamancer", "Judge Gift Cards 2006", "G06");
  }
}

module.exports = GrimLavamancer;

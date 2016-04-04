"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrimLavamancerBase = require("../setpJGP/GrimLavamancer.js");

class GrimLavamancer extends GrimLavamancerBase {
  constructor(game) {
    super(game, "Grim Lavamancer", "Magic 2012", "M12");
  }
}

module.exports = GrimLavamancer;

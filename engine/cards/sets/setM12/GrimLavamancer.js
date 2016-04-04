"use strict";
const Constants = require ("../../../Constants");
const GrimLavamancerBase = require("../setpJGP/GrimLavamancer");

class GrimLavamancer extends GrimLavamancerBase {
  constructor(game) {
    super(game, "Grim Lavamancer", "Magic 2012", "M12");
  }
}

module.exports = GrimLavamancer;

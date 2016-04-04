"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GolgariCharmBase = require("../setC15/GolgariCharm.js");

class GolgariCharm extends GolgariCharmBase {
  constructor(game) {
    super(game, "Golgari Charm", "Return to Ravnica", "RTR");
  }
}

module.exports = GolgariCharm;

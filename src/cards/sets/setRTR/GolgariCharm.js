"use strict";
const Constants = require ("../../../Constants");
const GolgariCharmBase = require("../setCMA/GolgariCharm");

class GolgariCharm extends GolgariCharmBase {
  constructor (game) {
    super(game, "Golgari Charm", "Return to Ravnica", "RTR");
  }
}

module.exports = GolgariCharm;

"use strict";
const Constants = require ("../../../Constants");
const SelesnyaCharmBase = require("../setCMA/SelesnyaCharm");

class SelesnyaCharm extends SelesnyaCharmBase {
  constructor (game) {
    super(game, "Selesnya Charm", "Return to Ravnica", "RTR");
  }
}

module.exports = SelesnyaCharm;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SelesnyaCharmBase = require("../setC13/SelesnyaCharm.js");

class SelesnyaCharm extends SelesnyaCharmBase {
  constructor(game) {
    super(game, "Selesnya Charm", "Return to Ravnica", "RTR");
  }
}

module.exports = SelesnyaCharm;

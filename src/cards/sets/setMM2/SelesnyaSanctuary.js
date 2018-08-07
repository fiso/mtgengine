"use strict";
const Constants = require ("../../../Constants");
const SelesnyaSanctuaryBase = require("../setC18/SelesnyaSanctuary");

class SelesnyaSanctuary extends SelesnyaSanctuaryBase {
  constructor (game) {
    super(game, "Selesnya Sanctuary", "Modern Masters 2015", "MM2");
  }
}

module.exports = SelesnyaSanctuary;

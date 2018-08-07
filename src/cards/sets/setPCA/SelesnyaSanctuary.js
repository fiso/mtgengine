"use strict";
const Constants = require ("../../../Constants");
const SelesnyaSanctuaryBase = require("../setC18/SelesnyaSanctuary");

class SelesnyaSanctuary extends SelesnyaSanctuaryBase {
  constructor (game) {
    super(game, "Selesnya Sanctuary", "Planechase Anthology", "PCA");
  }
}

module.exports = SelesnyaSanctuary;

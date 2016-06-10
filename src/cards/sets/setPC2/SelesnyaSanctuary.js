"use strict";
const Constants = require ("../../../Constants");
const SelesnyaSanctuaryBase = require("../setC13/SelesnyaSanctuary");

class SelesnyaSanctuary extends SelesnyaSanctuaryBase {
  constructor (game) {
    super(game, "Selesnya Sanctuary", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = SelesnyaSanctuary;

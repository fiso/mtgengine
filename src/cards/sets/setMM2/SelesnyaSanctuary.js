"use strict";
const Constants = require ("../../../Constants");
const SelesnyaSanctuaryBase = require("../setC13/SelesnyaSanctuary");

class SelesnyaSanctuary extends SelesnyaSanctuaryBase {
  constructor(game) {
    super(game, "Selesnya Sanctuary", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = SelesnyaSanctuary;

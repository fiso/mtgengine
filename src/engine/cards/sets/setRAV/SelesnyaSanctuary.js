"use strict";
const Constants = require ("../../../Constants");
const SelesnyaSanctuaryBase = require("../setC18/SelesnyaSanctuary");

class SelesnyaSanctuary extends SelesnyaSanctuaryBase {
  constructor (game) {
    super(game, "Selesnya Sanctuary", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SelesnyaSanctuary;

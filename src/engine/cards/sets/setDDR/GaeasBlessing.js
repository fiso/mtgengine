"use strict";
const Constants = require ("../../../Constants");
const GaeasBlessingBase = require("../setDOM/GaeasBlessing");

class GaeasBlessing extends GaeasBlessingBase {
  constructor (game) {
    super(game, "Gaea's Blessing", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = GaeasBlessing;

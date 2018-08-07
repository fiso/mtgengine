"use strict";
const Constants = require ("../../../Constants");
const HordelingOutburstBase = require("../setA25/HordelingOutburst");

class HordelingOutburst extends HordelingOutburstBase {
  constructor (game) {
    super(game, "Hordeling Outburst", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = HordelingOutburst;

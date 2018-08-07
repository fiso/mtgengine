"use strict";
const Constants = require ("../../../Constants");
const ViashinoSandstalkerBase = require("../set9ED/ViashinoSandstalker");

class ViashinoSandstalker extends ViashinoSandstalkerBase {
  constructor (game) {
    super(game, "Viashino Sandstalker", "World Championship Decks 1998", "WC98");
  }
}

module.exports = ViashinoSandstalker;

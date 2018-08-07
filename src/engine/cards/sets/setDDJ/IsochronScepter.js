"use strict";
const Constants = require ("../../../Constants");
const IsochronScepterBase = require("../setEMA/IsochronScepter");

class IsochronScepter extends IsochronScepterBase {
  constructor (game) {
    super(game, "Isochron Scepter", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = IsochronScepter;

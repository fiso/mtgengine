"use strict";
const Constants = require ("../../../Constants");
const OniofWildPlacesBase = require("../setCMA/OniofWildPlaces");

class OniofWildPlaces extends OniofWildPlacesBase {
  constructor (game) {
    super(game, "Oni of Wild Places", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = OniofWildPlaces;

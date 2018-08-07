"use strict";
const Constants = require ("../../../Constants");
const OniofWildPlacesBase = require("../setCMA/OniofWildPlaces");

class OniofWildPlaces extends OniofWildPlacesBase {
  constructor (game) {
    super(game, "Oni of Wild Places", "Commander 2011", "CMD");
  }
}

module.exports = OniofWildPlaces;

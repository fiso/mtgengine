"use strict";
const Constants = require ("../../../Constants");
const OniofWildPlacesBase = require("../setDDN/OniofWildPlaces");

class OniofWildPlaces extends OniofWildPlacesBase {
  constructor (game) {
    super(game, "Oni of Wild Places", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = OniofWildPlaces;

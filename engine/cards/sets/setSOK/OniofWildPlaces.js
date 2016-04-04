"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OniofWildPlacesBase = require("../setDDN/OniofWildPlaces.js");

class OniofWildPlaces extends OniofWildPlacesBase {
  constructor(game) {
    super(game, "Oni of Wild Places", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = OniofWildPlaces;

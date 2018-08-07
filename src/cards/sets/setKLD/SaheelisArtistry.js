"use strict";
const Constants = require ("../../../Constants");
const SaheelisArtistryBase = require("../setC18/SaheelisArtistry");

class SaheelisArtistry extends SaheelisArtistryBase {
  constructor (game) {
    super(game, "Saheeli's Artistry", "Kaladesh", "KLD");
  }
}

module.exports = SaheelisArtistry;

"use strict";
const Constants = require ("../../../Constants");
const DoomedTravelerBase = require("../setBBD/DoomedTraveler");

class DoomedTraveler extends DoomedTravelerBase {
  constructor (game) {
    super(game, "Doomed Traveler", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = DoomedTraveler;

"use strict";
const Constants = require ("../../../Constants");
const DoomedTravelerBase = require("../setBBD/DoomedTraveler");

class DoomedTraveler extends DoomedTravelerBase {
  constructor (game) {
    super(game, "Doomed Traveler", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = DoomedTraveler;

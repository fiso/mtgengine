"use strict";
const Constants = require ("../../../Constants");
const DoomedTravelerBase = require("../setDDQ/DoomedTraveler");

class DoomedTraveler extends DoomedTravelerBase {
  constructor (game) {
    super(game, "Doomed Traveler", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = DoomedTraveler;

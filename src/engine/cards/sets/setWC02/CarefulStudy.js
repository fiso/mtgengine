"use strict";
const Constants = require ("../../../Constants");
const CarefulStudyBase = require("../setWC03/CarefulStudy");

class CarefulStudy extends CarefulStudyBase {
  constructor (game) {
    super(game, "Careful Study", "World Championship Decks 2002", "WC02");
  }
}

module.exports = CarefulStudy;

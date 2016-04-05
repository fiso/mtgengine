"use strict";
const Constants = require ("../../../Constants");
const CaravanEscortBase = require("../setDDG/CaravanEscort");

class CaravanEscort extends CaravanEscortBase {
  constructor(game) {
    super(game, "Caravan Escort", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = CaravanEscort;

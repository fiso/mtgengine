"use strict";
const Constants = require ("../../../Constants");
const CarefulStudyBase = require("../setWC03/CarefulStudy");

class CarefulStudy extends CarefulStudyBase {
  constructor (game) {
    super(game, "Careful Study", "Odyssey", "ODY");
  }
}

module.exports = CarefulStudy;

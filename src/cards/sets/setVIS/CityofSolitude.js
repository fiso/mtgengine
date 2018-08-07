"use strict";
const Constants = require ("../../../Constants");
const CityofSolitudeBase = require("../setWC97/CityofSolitude");

class CityofSolitude extends CityofSolitudeBase {
  constructor (game) {
    super(game, "City of Solitude", "Visions", "VIS");
  }
}

module.exports = CityofSolitude;

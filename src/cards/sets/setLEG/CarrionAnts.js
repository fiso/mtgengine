"use strict";
const Constants = require ("../../../Constants");
const CarrionAntsBase = require("../setME3/CarrionAnts");

class CarrionAnts extends CarrionAntsBase {
  constructor (game) {
    super(game, "Carrion Ants", "Legends", "LEG");
  }
}

module.exports = CarrionAnts;

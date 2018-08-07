"use strict";
const Constants = require ("../../../Constants");
const CarrionAntsBase = require("../setME3/CarrionAnts");

class CarrionAnts extends CarrionAntsBase {
  constructor (game) {
    super(game, "Carrion Ants", "Fourth Edition", "4ED");
  }
}

module.exports = CarrionAnts;

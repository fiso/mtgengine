"use strict";
const Constants = require ("../../../Constants");
const CarrionAntsBase = require("../set5ED/CarrionAnts");

class CarrionAnts extends CarrionAntsBase {
  constructor (game) {
    super(game, "Carrion Ants", "Fourth Edition", "4ED");
  }
}

module.exports = CarrionAnts;

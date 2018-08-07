"use strict";
const Constants = require ("../../../Constants");
const CarrionAntsBase = require("../setME3/CarrionAnts");

class CarrionAnts extends CarrionAntsBase {
  constructor (game) {
    super(game, "Carrion Ants", "Fifth Edition", "5ED");
  }
}

module.exports = CarrionAnts;

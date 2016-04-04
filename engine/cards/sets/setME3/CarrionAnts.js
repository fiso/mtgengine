"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CarrionAntsBase = require("../set5ED/CarrionAnts.js");

class CarrionAnts extends CarrionAntsBase {
  constructor(game) {
    super(game, "Carrion Ants", "Masters Edition III", "ME3");
  }
}

module.exports = CarrionAnts;

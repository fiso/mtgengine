"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarrionAnts extends Card {
  constructor(game) {
    super(game, "Carrion Ants", "Fifth Edition", "5ED");
  }
}

module.exports = CarrionAnts;

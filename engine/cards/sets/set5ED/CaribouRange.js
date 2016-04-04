"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CaribouRange extends Card {
  constructor(game) {
    super(game, "Caribou Range", "Fifth Edition", "5ED");
  }
}

module.exports = CaribouRange;

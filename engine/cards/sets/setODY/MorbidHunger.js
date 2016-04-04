"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MorbidHunger extends Card {
  constructor(game) {
    super(game, "Morbid Hunger", "Odyssey", "ODY");
  }
}

module.exports = MorbidHunger;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MesaChicken extends Card {
  constructor(game) {
    super(game, "Mesa Chicken", "Unglued", "UGL");
  }
}

module.exports = MesaChicken;

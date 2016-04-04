"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CircleofElders extends Card {
  constructor(game) {
    super(game, "Circle of Elders", "Dragons of Tarkir", "DTK");
  }
}

module.exports = CircleofElders;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShapeStealer extends Card {
  constructor(game) {
    super(game, "Shape Stealer", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ShapeStealer;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Glint extends Card {
  constructor(game) {
    super(game, "Glint", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Glint;

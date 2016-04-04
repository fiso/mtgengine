"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MinisterofPain extends Card {
  constructor(game) {
    super(game, "Minister of Pain", "Dragons of Tarkir", "DTK");
  }
}

module.exports = MinisterofPain;

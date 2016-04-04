"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarshHulk extends Card {
  constructor(game) {
    super(game, "Marsh Hulk", "Dragons of Tarkir", "DTK");
  }
}

module.exports = MarshHulk;

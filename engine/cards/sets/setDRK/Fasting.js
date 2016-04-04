"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fasting extends Card {
  constructor(game) {
    super(game, "Fasting", "The Dark", "DRK");
  }
}

module.exports = Fasting;

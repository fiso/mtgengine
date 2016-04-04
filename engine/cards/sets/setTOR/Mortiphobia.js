"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mortiphobia extends Card {
  constructor(game) {
    super(game, "Mortiphobia", "Torment", "TOR");
  }
}

module.exports = Mortiphobia;

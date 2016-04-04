"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MonasteryFlock extends Card {
  constructor(game) {
    super(game, "Monastery Flock", "Khans of Tarkir", "KTK");
  }
}

module.exports = MonasteryFlock;

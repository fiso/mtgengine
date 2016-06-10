"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MonasteryFlock extends UnimplementedCard {
  constructor (game) {
    super(game, "Monastery Flock", "Khans of Tarkir", "KTK");
  }
}

module.exports = MonasteryFlock;

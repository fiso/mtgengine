"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeadDrop extends Card {
  constructor(game) {
    super(game, "Dead Drop", "Khans of Tarkir", "KTK");
  }
}

module.exports = DeadDrop;

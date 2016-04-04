"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarNameAspirant extends Card {
  constructor(game) {
    super(game, "War-Name Aspirant", "Khans of Tarkir", "KTK");
  }
}

module.exports = WarNameAspirant;

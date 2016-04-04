"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DazzlingRamparts extends Card {
  constructor(game) {
    super(game, "Dazzling Ramparts", "Khans of Tarkir", "KTK");
  }
}

module.exports = DazzlingRamparts;

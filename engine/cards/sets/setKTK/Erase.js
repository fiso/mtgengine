"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Erase extends Card {
  constructor(game) {
    super(game, "Erase", "Khans of Tarkir", "KTK");
  }
}

module.exports = Erase;

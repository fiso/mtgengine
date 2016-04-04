"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BravetheSands extends Card {
  constructor(game) {
    super(game, "Brave the Sands", "Khans of Tarkir", "KTK");
  }
}

module.exports = BravetheSands;

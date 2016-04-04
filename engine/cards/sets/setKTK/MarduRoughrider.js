"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarduRoughrider extends Card {
  constructor(game) {
    super(game, "Mardu Roughrider", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduRoughrider;

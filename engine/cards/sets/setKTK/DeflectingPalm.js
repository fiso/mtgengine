"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeflectingPalm extends Card {
  constructor(game) {
    super(game, "Deflecting Palm", "Khans of Tarkir", "KTK");
  }
}

module.exports = DeflectingPalm;

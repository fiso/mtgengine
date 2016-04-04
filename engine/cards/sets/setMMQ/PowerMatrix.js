"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PowerMatrix extends Card {
  constructor(game) {
    super(game, "Power Matrix", "Mercadian Masques", "MMQ");
  }
}

module.exports = PowerMatrix;

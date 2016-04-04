"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Millikin extends Card {
  constructor(game) {
    super(game, "Millikin", "Odyssey", "ODY");
  }
}

module.exports = Millikin;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlanketofNight extends Card {
  constructor(game) {
    super(game, "Blanket of Night", "Visions", "VIS");
  }
}

module.exports = BlanketofNight;

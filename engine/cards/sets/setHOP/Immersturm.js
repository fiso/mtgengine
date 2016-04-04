"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Immersturm extends Card {
  constructor(game) {
    super(game, "Immersturm", "Planechase", "HOP");
  }
}

module.exports = Immersturm;

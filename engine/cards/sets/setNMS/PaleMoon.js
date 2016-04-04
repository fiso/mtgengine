"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PaleMoon extends Card {
  constructor(game) {
    super(game, "Pale Moon", "Nemesis", "NMS");
  }
}

module.exports = PaleMoon;

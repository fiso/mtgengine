"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Corrosion extends Card {
  constructor(game) {
    super(game, "Corrosion", "Visions", "VIS");
  }
}

module.exports = Corrosion;

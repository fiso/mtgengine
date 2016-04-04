"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Anavolver extends Card {
  constructor(game) {
    super(game, "Anavolver", "Apocalypse", "APC");
  }
}

module.exports = Anavolver;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rakavolver extends Card {
  constructor(game) {
    super(game, "Rakavolver", "Apocalypse", "APC");
  }
}

module.exports = Rakavolver;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StillLife extends Card {
  constructor(game) {
    super(game, "Still Life", "Odyssey", "ODY");
  }
}

module.exports = StillLife;

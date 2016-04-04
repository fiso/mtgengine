"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LayoftheLand extends Card {
  constructor(game) {
    super(game, "Lay of the Land", "Apocalypse", "APC");
  }
}

module.exports = LayoftheLand;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiritoftheLabyrinth extends Card {
  constructor(game) {
    super(game, "Spirit of the Labyrinth", "Born of the Gods", "BNG");
  }
}

module.exports = SpiritoftheLabyrinth;

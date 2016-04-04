"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MaelstromDjinn extends Card {
  constructor(game) {
    super(game, "Maelstrom Djinn", "Future Sight", "FUT");
  }
}

module.exports = MaelstromDjinn;

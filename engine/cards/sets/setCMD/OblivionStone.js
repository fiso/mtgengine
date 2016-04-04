"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OblivionStone extends Card {
  constructor(game) {
    super(game, "Oblivion Stone", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = OblivionStone;

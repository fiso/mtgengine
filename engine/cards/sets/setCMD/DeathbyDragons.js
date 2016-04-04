"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathbyDragons extends Card {
  constructor(game) {
    super(game, "Death by Dragons", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DeathbyDragons;

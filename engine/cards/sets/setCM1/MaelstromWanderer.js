"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MaelstromWanderer extends Card {
  constructor(game) {
    super(game, "Maelstrom Wanderer", "Commander's Arsenal", "CM1");
  }
}

module.exports = MaelstromWanderer;

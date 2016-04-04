"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlameheartWerewolf extends Card {
  constructor(game) {
    super(game, "Flameheart Werewolf", "Shadows over Innistrad", "SOI");
  }
}

module.exports = FlameheartWerewolf;

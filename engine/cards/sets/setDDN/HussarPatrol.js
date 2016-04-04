"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HussarPatrol extends Card {
  constructor(game) {
    super(game, "Hussar Patrol", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = HussarPatrol;

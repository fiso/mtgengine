"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HussarPatrol extends UnimplementedCard {
  constructor(game) {
    super(game, "Hussar Patrol", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = HussarPatrol;

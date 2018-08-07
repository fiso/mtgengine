"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViridianClaw extends UnimplementedCard {
  constructor (game) {
    super(game, "Viridian Claw", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = ViridianClaw;

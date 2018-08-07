"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesecrationElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Desecration Elemental", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = DesecrationElemental;

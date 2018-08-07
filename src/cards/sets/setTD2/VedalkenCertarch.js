"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VedalkenCertarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Vedalken Certarch", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = VedalkenCertarch;

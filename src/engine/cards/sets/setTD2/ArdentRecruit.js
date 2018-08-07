"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArdentRecruit extends UnimplementedCard {
  constructor (game) {
    super(game, "Ardent Recruit", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = ArdentRecruit;

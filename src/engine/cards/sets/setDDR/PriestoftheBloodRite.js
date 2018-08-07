"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PriestoftheBloodRite extends UnimplementedCard {
  constructor (game) {
    super(game, "Priest of the Blood Rite", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = PriestoftheBloodRite;

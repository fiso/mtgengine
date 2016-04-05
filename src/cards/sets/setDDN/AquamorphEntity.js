"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AquamorphEntity extends UnimplementedCard {
  constructor(game) {
    super(game, "Aquamorph Entity", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = AquamorphEntity;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VraskatheUnseen extends UnimplementedCard {
  constructor(game) {
    super(game, "Vraska the Unseen", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = VraskatheUnseen;

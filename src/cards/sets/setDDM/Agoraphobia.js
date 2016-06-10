"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Agoraphobia extends UnimplementedCard {
  constructor (game) {
    super(game, "Agoraphobia", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Agoraphobia;

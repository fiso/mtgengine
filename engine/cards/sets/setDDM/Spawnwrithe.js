"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spawnwrithe extends UnimplementedCard {
  constructor(game) {
    super(game, "Spawnwrithe", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Spawnwrithe;

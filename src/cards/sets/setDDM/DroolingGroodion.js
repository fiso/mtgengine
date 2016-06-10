"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DroolingGroodion extends UnimplementedCard {
  constructor (game) {
    super(game, "Drooling Groodion", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = DroolingGroodion;

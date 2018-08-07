"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RayofCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Ray of Command", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = RayofCommand;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JacesIngenuity extends UnimplementedCard {
  constructor(game) {
    super(game, "Jace's Ingenuity", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = JacesIngenuity;

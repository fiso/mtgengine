"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JacesPhantasm extends UnimplementedCard {
  constructor(game) {
    super(game, "Jace's Phantasm", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = JacesPhantasm;

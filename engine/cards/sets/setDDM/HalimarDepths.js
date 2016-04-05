"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HalimarDepths extends UnimplementedCard {
  constructor(game) {
    super(game, "Halimar Depths", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = HalimarDepths;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HalimarDepths extends Card {
  constructor(game) {
    super(game, "Halimar Depths", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = HalimarDepths;

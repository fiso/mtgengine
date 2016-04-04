"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JacesIngenuity extends Card {
  constructor(game) {
    super(game, "Jace's Ingenuity", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = JacesIngenuity;

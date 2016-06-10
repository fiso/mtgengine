"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CinderPyromancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Cinder Pyromancer", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = CinderPyromancer;

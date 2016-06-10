"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProdigalPyromancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Prodigal Pyromancer", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ProdigalPyromancer;

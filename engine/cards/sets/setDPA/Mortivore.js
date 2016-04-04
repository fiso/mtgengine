"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mortivore extends UnimplementedCard {
  constructor(game) {
    super(game, "Mortivore", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Mortivore;

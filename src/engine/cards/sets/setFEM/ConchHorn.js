"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConchHorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Conch Horn", "Fallen Empires", "FEM");
  }
}

module.exports = ConchHorn;

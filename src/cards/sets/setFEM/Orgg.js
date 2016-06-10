"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Orgg extends UnimplementedCard {
  constructor (game) {
    super(game, "Orgg", "Fallen Empires", "FEM");
  }
}

module.exports = Orgg;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Concentrate extends UnimplementedCard {
  constructor (game) {
    super(game, "Concentrate", "Explorers of Ixalan", "E02");
  }
}

module.exports = Concentrate;

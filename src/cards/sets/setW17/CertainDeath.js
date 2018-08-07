"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CertainDeath extends UnimplementedCard {
  constructor (game) {
    super(game, "Certain Death", "Welcome Deck 2017", "W17");
  }
}

module.exports = CertainDeath;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaEchoes extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Echoes", "Onslaught", "ONS");
  }
}

module.exports = ManaEchoes;

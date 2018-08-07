"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampire Champion", "Rivals of Ixalan", "RIX");
  }
}

module.exports = VampireChampion;

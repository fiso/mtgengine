"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DinosaurHunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Dinosaur Hunter", "Rivals of Ixalan", "RIX");
  }
}

module.exports = DinosaurHunter;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorEntanglers extends UnimplementedCard {
  constructor (game) {
    super(game, "Kor Entanglers", "Battle for Zendikar", "BFZ");
  }
}

module.exports = KorEntanglers;

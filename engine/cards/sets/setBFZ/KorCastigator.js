"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorCastigator extends UnimplementedCard {
  constructor(game) {
    super(game, "Kor Castigator", "Battle for Zendikar", "BFZ");
  }
}

module.exports = KorCastigator;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorAlly extends UnimplementedCard {
  constructor (game) {
    super(game, "Kor Ally", "Battle for Zendikar Tokens", "TBFZ");
  }
}

module.exports = KorAlly;

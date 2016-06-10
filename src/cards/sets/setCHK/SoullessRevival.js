"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoullessRevival extends UnimplementedCard {
  constructor (game) {
    super(game, "Soulless Revival", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SoullessRevival;

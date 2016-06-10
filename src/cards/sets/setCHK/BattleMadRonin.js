"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleMadRonin extends UnimplementedCard {
  constructor (game) {
    super(game, "Battle-Mad Ronin", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BattleMadRonin;

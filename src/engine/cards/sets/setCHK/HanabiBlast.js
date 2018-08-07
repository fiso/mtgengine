"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HanabiBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Hanabi Blast", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HanabiBlast;

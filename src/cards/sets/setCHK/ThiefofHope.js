"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThiefofHope extends UnimplementedCard {
  constructor (game) {
    super(game, "Thief of Hope", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ThiefofHope;

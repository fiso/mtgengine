"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReversetheSands extends UnimplementedCard {
  constructor (game) {
    super(game, "Reverse the Sands", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ReversetheSands;

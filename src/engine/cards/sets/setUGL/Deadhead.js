"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deadhead extends UnimplementedCard {
  constructor (game) {
    super(game, "Deadhead", "Unglued", "UGL");
  }
}

module.exports = Deadhead;

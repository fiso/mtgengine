"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightoftheHokeyPokey extends UnimplementedCard {
  constructor(game) {
    super(game, "Knight of the Hokey Pokey", "Unglued", "UGL");
  }
}

module.exports = KnightoftheHokeyPokey;

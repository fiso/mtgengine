"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wasp extends UnimplementedCard {
  constructor (game) {
    super(game, "Wasp", "Tenth Edition Tokens", "T10E");
  }
}

module.exports = Wasp;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lexivore extends UnimplementedCard {
  constructor (game) {
    super(game, "Lexivore", "Unglued", "UGL");
  }
}

module.exports = Lexivore;

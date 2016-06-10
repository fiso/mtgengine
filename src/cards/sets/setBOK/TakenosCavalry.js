"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TakenosCavalry extends UnimplementedCard {
  constructor (game) {
    super(game, "Takeno's Cavalry", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = TakenosCavalry;

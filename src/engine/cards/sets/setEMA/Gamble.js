"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gamble extends UnimplementedCard {
  constructor (game) {
    super(game, "Gamble", "Eternal Masters", "EMA");
  }
}

module.exports = Gamble;

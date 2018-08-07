"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Soulcatcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Soulcatcher", "Eternal Masters", "EMA");
  }
}

module.exports = Soulcatcher;

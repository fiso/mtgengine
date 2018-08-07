"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantTortoise extends UnimplementedCard {
  constructor (game) {
    super(game, "Giant Tortoise", "Eternal Masters", "EMA");
  }
}

module.exports = GiantTortoise;

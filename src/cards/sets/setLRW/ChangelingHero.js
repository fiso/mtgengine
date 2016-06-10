"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChangelingHero extends UnimplementedCard {
  constructor (game) {
    super(game, "Changeling Hero", "Lorwyn", "LRW");
  }
}

module.exports = ChangelingHero;

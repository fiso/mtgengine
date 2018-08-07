"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HalfSquirrelHalf extends UnimplementedCard {
  constructor (game) {
    super(game, "Half-Squirrel, Half-", "Unstable", "UST");
  }
}

module.exports = HalfSquirrelHalf;

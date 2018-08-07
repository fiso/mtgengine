"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteelSquirrel extends UnimplementedCard {
  constructor (game) {
    super(game, "Steel Squirrel", "Unstable", "UST");
  }
}

module.exports = SteelSquirrel;

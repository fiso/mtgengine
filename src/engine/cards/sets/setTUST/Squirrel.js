"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Squirrel extends UnimplementedCard {
  constructor (game) {
    super(game, "Squirrel", "Unstable Tokens", "TUST");
  }
}

module.exports = Squirrel;

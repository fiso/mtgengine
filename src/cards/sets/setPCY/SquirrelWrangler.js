"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SquirrelWrangler extends UnimplementedCard {
  constructor (game) {
    super(game, "Squirrel Wrangler", "Prophecy", "PCY");
  }
}

module.exports = SquirrelWrangler;

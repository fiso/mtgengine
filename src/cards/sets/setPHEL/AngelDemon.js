"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel // Demon", "Open the Helvault", "PHEL");
  }
}

module.exports = AngelDemon;

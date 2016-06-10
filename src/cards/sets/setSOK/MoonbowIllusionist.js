"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoonbowIllusionist extends UnimplementedCard {
  constructor (game) {
    super(game, "Moonbow Illusionist", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MoonbowIllusionist;

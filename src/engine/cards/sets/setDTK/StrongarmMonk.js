"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrongarmMonk extends UnimplementedCard {
  constructor (game) {
    super(game, "Strongarm Monk", "Dragons of Tarkir", "DTK");
  }
}

module.exports = StrongarmMonk;

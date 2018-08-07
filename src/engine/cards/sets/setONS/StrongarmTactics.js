"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrongarmTactics extends UnimplementedCard {
  constructor (game) {
    super(game, "Strongarm Tactics", "Onslaught", "ONS");
  }
}

module.exports = StrongarmTactics;

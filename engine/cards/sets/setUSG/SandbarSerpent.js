"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SandbarSerpent extends UnimplementedCard {
  constructor(game) {
    super(game, "Sandbar Serpent", "Urza's Saga", "USG");
  }
}

module.exports = SandbarSerpent;

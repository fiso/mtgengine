"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RumblingCrescendo extends Card {
  constructor(game) {
    super(game, "Rumbling Crescendo", "Urza's Saga", "USG");
  }
}

module.exports = RumblingCrescendo;

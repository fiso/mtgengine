"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MishrasHelix extends Card {
  constructor(game) {
    super(game, "Mishra's Helix", "Urza's Saga", "USG");
  }
}

module.exports = MishrasHelix;

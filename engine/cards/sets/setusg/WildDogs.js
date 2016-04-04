"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildDogs extends Card {
  constructor(game) {
    super(game, "Wild Dogs", "Urza's Saga", "USG");
  }
}

module.exports = WildDogs;

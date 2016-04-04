"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HiddenHerd extends Card {
  constructor(game) {
    super(game, "Hidden Herd", "Urza's Saga", "USG");
  }
}

module.exports = HiddenHerd;

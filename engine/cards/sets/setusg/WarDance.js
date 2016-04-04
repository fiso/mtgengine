"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarDance extends Card {
  constructor(game) {
    super(game, "War Dance", "Urza's Saga", "USG");
  }
}

module.exports = WarDance;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FaithHealer extends Card {
  constructor(game) {
    super(game, "Faith Healer", "Urza's Saga", "USG");
  }
}

module.exports = FaithHealer;

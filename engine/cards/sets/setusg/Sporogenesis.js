"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sporogenesis extends Card {
  constructor(game) {
    super(game, "Sporogenesis", "Urza's Saga", "USG");
  }
}

module.exports = Sporogenesis;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sunder extends Card {
  constructor(game) {
    super(game, "Sunder", "Urza's Saga", "USG");
  }
}

module.exports = Sunder;

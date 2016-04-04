"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Falter extends Card {
  constructor(game) {
    super(game, "Falter", "Urza's Saga", "USG");
  }
}

module.exports = Falter;

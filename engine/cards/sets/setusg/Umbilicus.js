"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Umbilicus extends Card {
  constructor(game) {
    super(game, "Umbilicus", "Urza's Saga", "USG");
  }
}

module.exports = Umbilicus;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Whetstone extends Card {
  constructor(game) {
    super(game, "Whetstone", "Urza's Saga", "USG");
  }
}

module.exports = Whetstone;

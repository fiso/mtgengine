"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Scrap extends Card {
  constructor(game) {
    super(game, "Scrap", "Urza's Saga", "USG");
  }
}

module.exports = Scrap;

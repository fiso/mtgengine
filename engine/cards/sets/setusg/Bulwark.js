"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bulwark extends Card {
  constructor(game) {
    super(game, "Bulwark", "Urza's Saga", "USG");
  }
}

module.exports = Bulwark;

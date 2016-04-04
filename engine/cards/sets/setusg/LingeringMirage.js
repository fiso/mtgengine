"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LingeringMirage extends Card {
  constructor(game) {
    super(game, "Lingering Mirage", "Urza's Saga", "USG");
  }
}

module.exports = LingeringMirage;

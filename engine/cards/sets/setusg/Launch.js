"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Launch extends Card {
  constructor(game) {
    super(game, "Launch", "Urza's Saga", "USG");
  }
}

module.exports = Launch;

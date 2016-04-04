"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hush extends Card {
  constructor(game) {
    super(game, "Hush", "Urza's Saga", "USG");
  }
}

module.exports = Hush;

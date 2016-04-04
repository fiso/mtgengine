"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RainofSalt extends Card {
  constructor(game) {
    super(game, "Rain of Salt", "Portal", "POR");
  }
}

module.exports = RainofSalt;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Flicker extends Card {
  constructor(game) {
    super(game, "Flicker", "Urza's Destiny", "UDS");
  }
}

module.exports = Flicker;

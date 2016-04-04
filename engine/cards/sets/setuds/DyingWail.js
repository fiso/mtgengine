"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DyingWail extends Card {
  constructor(game) {
    super(game, "Dying Wail", "Urza's Destiny", "UDS");
  }
}

module.exports = DyingWail;

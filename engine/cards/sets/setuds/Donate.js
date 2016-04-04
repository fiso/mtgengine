"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Donate extends Card {
  constructor(game) {
    super(game, "Donate", "Urza's Destiny", "UDS");
  }
}

module.exports = Donate;

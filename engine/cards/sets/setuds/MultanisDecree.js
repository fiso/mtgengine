"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MultanisDecree extends Card {
  constructor(game) {
    super(game, "Multani's Decree", "Urza's Destiny", "UDS");
  }
}

module.exports = MultanisDecree;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarnivalofSouls extends Card {
  constructor(game) {
    super(game, "Carnival of Souls", "Urza's Destiny", "UDS");
  }
}

module.exports = CarnivalofSouls;

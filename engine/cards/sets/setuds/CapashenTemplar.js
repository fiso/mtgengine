"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CapashenTemplar extends Card {
  constructor(game) {
    super(game, "Capashen Templar", "Urza's Destiny", "UDS");
  }
}

module.exports = CapashenTemplar;

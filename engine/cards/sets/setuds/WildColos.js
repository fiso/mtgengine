"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildColos extends Card {
  constructor(game) {
    super(game, "Wild Colos", "Urza's Destiny", "UDS");
  }
}

module.exports = WildColos;

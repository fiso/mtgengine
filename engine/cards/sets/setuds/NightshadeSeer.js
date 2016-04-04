"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NightshadeSeer extends Card {
  constructor(game) {
    super(game, "Nightshade Seer", "Urza's Destiny", "UDS");
  }
}

module.exports = NightshadeSeer;

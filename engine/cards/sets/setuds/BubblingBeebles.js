"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BubblingBeebles extends Card {
  constructor(game) {
    super(game, "Bubbling Beebles", "Urza's Destiny", "UDS");
  }
}

module.exports = BubblingBeebles;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Treachery extends Card {
  constructor(game) {
    super(game, "Treachery", "Urza's Destiny", "UDS");
  }
}

module.exports = Treachery;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RofellossGift extends Card {
  constructor(game) {
    super(game, "Rofellos's Gift", "Urza's Destiny", "UDS");
  }
}

module.exports = RofellossGift;

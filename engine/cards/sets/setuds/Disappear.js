"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Disappear extends Card {
  constructor(game) {
    super(game, "Disappear", "Urza's Destiny", "UDS");
  }
}

module.exports = Disappear;

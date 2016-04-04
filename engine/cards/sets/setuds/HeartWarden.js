"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeartWarden extends Card {
  constructor(game) {
    super(game, "Heart Warden", "Urza's Destiny", "UDS");
  }
}

module.exports = HeartWarden;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HighSeas extends Card {
  constructor(game) {
    super(game, "High Seas", "Mercadian Masques", "MMQ");
  }
}

module.exports = HighSeas;

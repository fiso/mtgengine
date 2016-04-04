"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CleartheLand extends Card {
  constructor(game) {
    super(game, "Clear the Land", "Mercadian Masques", "MMQ");
  }
}

module.exports = CleartheLand;

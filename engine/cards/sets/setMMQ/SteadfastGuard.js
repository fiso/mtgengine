"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SteadfastGuard extends Card {
  constructor(game) {
    super(game, "Steadfast Guard", "Mercadian Masques", "MMQ");
  }
}

module.exports = SteadfastGuard;

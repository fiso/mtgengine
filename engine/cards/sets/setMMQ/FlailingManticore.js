"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlailingManticore extends Card {
  constructor(game) {
    super(game, "Flailing Manticore", "Mercadian Masques", "MMQ");
  }
}

module.exports = FlailingManticore;

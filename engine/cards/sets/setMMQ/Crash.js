"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Crash extends Card {
  constructor(game) {
    super(game, "Crash", "Mercadian Masques", "MMQ");
  }
}

module.exports = Crash;

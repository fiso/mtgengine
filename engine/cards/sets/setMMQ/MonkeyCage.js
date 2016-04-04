"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MonkeyCage extends Card {
  constructor(game) {
    super(game, "Monkey Cage", "Mercadian Masques", "MMQ");
  }
}

module.exports = MonkeyCage;

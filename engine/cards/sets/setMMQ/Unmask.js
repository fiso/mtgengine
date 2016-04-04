"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Unmask extends Card {
  constructor(game) {
    super(game, "Unmask", "Mercadian Masques", "MMQ");
  }
}

module.exports = Unmask;

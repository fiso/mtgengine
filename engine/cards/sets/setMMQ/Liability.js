"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Liability extends Card {
  constructor(game) {
    super(game, "Liability", "Mercadian Masques", "MMQ");
  }
}

module.exports = Liability;

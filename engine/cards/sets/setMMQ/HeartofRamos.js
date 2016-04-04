"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeartofRamos extends Card {
  constructor(game) {
    super(game, "Heart of Ramos", "Mercadian Masques", "MMQ");
  }
}

module.exports = HeartofRamos;

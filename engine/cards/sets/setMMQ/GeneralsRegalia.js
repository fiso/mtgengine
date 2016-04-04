"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GeneralsRegalia extends Card {
  constructor(game) {
    super(game, "General's Regalia", "Mercadian Masques", "MMQ");
  }
}

module.exports = GeneralsRegalia;

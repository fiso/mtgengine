"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PaupersCage extends Card {
  constructor(game) {
    super(game, "Paupers' Cage", "Mirage", "MIR");
  }
}

module.exports = PaupersCage;

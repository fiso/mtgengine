"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MisersCage extends Card {
  constructor(game) {
    super(game, "Misers' Cage", "Mirage", "MIR");
  }
}

module.exports = MisersCage;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlindFury extends Card {
  constructor(game) {
    super(game, "Blind Fury", "Mirage", "MIR");
  }
}

module.exports = BlindFury;

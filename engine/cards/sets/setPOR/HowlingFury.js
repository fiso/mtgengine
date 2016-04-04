"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HowlingFury extends Card {
  constructor(game) {
    super(game, "Howling Fury", "Portal", "POR");
  }
}

module.exports = HowlingFury;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SunscapeApprentice extends Card {
  constructor(game) {
    super(game, "Sunscape Apprentice", "Invasion", "INV");
  }
}

module.exports = SunscapeApprentice;

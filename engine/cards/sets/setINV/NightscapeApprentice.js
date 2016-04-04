"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NightscapeApprentice extends Card {
  constructor(game) {
    super(game, "Nightscape Apprentice", "Invasion", "INV");
  }
}

module.exports = NightscapeApprentice;

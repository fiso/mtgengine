"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormscapeApprentice extends Card {
  constructor(game) {
    super(game, "Stormscape Apprentice", "Invasion", "INV");
  }
}

module.exports = StormscapeApprentice;

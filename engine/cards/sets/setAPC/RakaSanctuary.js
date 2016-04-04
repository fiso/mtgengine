"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RakaSanctuary extends Card {
  constructor(game) {
    super(game, "Raka Sanctuary", "Apocalypse", "APC");
  }
}

module.exports = RakaSanctuary;

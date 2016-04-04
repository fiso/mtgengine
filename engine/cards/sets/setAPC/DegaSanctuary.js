"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DegaSanctuary extends Card {
  constructor(game) {
    super(game, "Dega Sanctuary", "Apocalypse", "APC");
  }
}

module.exports = DegaSanctuary;

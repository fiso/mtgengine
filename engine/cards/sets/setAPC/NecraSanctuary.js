"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NecraSanctuary extends Card {
  constructor(game) {
    super(game, "Necra Sanctuary", "Apocalypse", "APC");
  }
}

module.exports = NecraSanctuary;

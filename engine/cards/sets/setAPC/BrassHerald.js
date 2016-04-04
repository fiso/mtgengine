"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrassHerald extends Card {
  constructor(game) {
    super(game, "Brass Herald", "Apocalypse", "APC");
  }
}

module.exports = BrassHerald;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FungalShambler extends Card {
  constructor(game) {
    super(game, "Fungal Shambler", "Apocalypse", "APC");
  }
}

module.exports = FungalShambler;

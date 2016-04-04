"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShivanRaptor extends Card {
  constructor(game) {
    super(game, "Shivan Raptor", "Urza's Saga", "USG");
  }
}

module.exports = ShivanRaptor;

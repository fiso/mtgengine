"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShivanReef extends Card {
  constructor(game) {
    super(game, "Shivan Reef", "Apocalypse", "APC");
  }
}

module.exports = ShivanReef;

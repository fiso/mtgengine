"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildResearch extends Card {
  constructor(game) {
    super(game, "Wild Research", "Apocalypse", "APC");
  }
}

module.exports = WildResearch;

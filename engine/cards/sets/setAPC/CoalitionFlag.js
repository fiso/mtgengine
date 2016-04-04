"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoalitionFlag extends Card {
  constructor(game) {
    super(game, "Coalition Flag", "Apocalypse", "APC");
  }
}

module.exports = CoalitionFlag;

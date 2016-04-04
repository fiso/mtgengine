"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Serra extends Card {
  constructor(game) {
    super(game, "Serra", "Vanguard", "VAN");
  }
}

module.exports = Serra;

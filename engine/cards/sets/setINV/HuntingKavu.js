"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntingKavu extends Card {
  constructor(game) {
    super(game, "Hunting Kavu", "Invasion", "INV");
  }
}

module.exports = HuntingKavu;

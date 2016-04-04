"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PouncingKavu extends Card {
  constructor(game) {
    super(game, "Pouncing Kavu", "Invasion", "INV");
  }
}

module.exports = PouncingKavu;

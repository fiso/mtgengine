"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HateWeaver extends Card {
  constructor(game) {
    super(game, "Hate Weaver", "Invasion", "INV");
  }
}

module.exports = HateWeaver;

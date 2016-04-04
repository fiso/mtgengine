"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThopterAssembly extends Card {
  constructor(game) {
    super(game, "Thopter Assembly", "Launch Parties", "pLPA");
  }
}

module.exports = ThopterAssembly;

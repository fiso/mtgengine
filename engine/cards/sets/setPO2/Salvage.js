"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Salvage extends Card {
  constructor(game) {
    super(game, "Salvage", "Portal Second Age", "PO2");
  }
}

module.exports = Salvage;

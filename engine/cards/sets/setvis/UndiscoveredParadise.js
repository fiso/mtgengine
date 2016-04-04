"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UndiscoveredParadise extends Card {
  constructor(game) {
    super(game, "Undiscovered Paradise", "Visions", "VIS");
  }
}

module.exports = UndiscoveredParadise;

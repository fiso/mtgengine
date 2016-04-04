"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CemeteryGate extends Card {
  constructor(game) {
    super(game, "Cemetery Gate", "Homelands", "HML");
  }
}

module.exports = CemeteryGate;

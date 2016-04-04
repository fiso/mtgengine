"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarriorsStand extends Card {
  constructor(game) {
    super(game, "Warrior's Stand", "Portal Second Age", "PO2");
  }
}

module.exports = WarriorsStand;

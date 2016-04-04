"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlabornGrenadier extends Card {
  constructor(game) {
    super(game, "Alaborn Grenadier", "Portal Second Age", "PO2");
  }
}

module.exports = AlabornGrenadier;

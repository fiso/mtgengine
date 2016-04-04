"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Extinguish extends Card {
  constructor(game) {
    super(game, "Extinguish", "Portal Second Age", "PO2");
  }
}

module.exports = Extinguish;

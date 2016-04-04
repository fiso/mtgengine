"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DakmorScorpion extends Card {
  constructor(game) {
    super(game, "Dakmor Scorpion", "Portal Second Age", "PO2");
  }
}

module.exports = DakmorScorpion;

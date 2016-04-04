"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bargain extends Card {
  constructor(game) {
    super(game, "Bargain", "Portal Second Age", "PO2");
  }
}

module.exports = Bargain;

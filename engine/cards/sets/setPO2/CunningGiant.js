"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CunningGiant extends Card {
  constructor(game) {
    super(game, "Cunning Giant", "Portal Second Age", "PO2");
  }
}

module.exports = CunningGiant;

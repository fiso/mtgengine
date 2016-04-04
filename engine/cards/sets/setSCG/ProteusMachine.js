"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ProteusMachine extends Card {
  constructor(game) {
    super(game, "Proteus Machine", "Scourge", "SCG");
  }
}

module.exports = ProteusMachine;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ProcessorAssault extends Card {
  constructor(game) {
    super(game, "Processor Assault", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ProcessorAssault;

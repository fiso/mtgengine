"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProcessorAssault extends UnimplementedCard {
  constructor(game) {
    super(game, "Processor Assault", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ProcessorAssault;

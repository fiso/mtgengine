"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeirsofStromkirk extends UnimplementedCard {
  constructor(game) {
    super(game, "Heirs of Stromkirk", "Avacyn Restored", "AVR");
  }
}

module.exports = HeirsofStromkirk;

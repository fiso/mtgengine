"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeirsofStromkirk extends Card {
  constructor(game) {
    super(game, "Heirs of Stromkirk", "Avacyn Restored", "AVR");
  }
}

module.exports = HeirsofStromkirk;

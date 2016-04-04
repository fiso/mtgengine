"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DemonicRising extends Card {
  constructor(game) {
    super(game, "Demonic Rising", "Avacyn Restored", "AVR");
  }
}

module.exports = DemonicRising;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DemonicTaskmaster extends Card {
  constructor(game) {
    super(game, "Demonic Taskmaster", "Avacyn Restored", "AVR");
  }
}

module.exports = DemonicTaskmaster;

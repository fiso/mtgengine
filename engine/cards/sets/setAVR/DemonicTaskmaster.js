"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonicTaskmaster extends UnimplementedCard {
  constructor(game) {
    super(game, "Demonic Taskmaster", "Avacyn Restored", "AVR");
  }
}

module.exports = DemonicTaskmaster;

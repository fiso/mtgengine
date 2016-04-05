"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonicRising extends UnimplementedCard {
  constructor(game) {
    super(game, "Demonic Rising", "Avacyn Restored", "AVR");
  }
}

module.exports = DemonicRising;

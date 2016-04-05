"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThatcherRevolt extends UnimplementedCard {
  constructor(game) {
    super(game, "Thatcher Revolt", "Avacyn Restored", "AVR");
  }
}

module.exports = ThatcherRevolt;

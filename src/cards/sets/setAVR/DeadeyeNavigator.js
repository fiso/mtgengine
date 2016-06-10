"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadeyeNavigator extends UnimplementedCard {
  constructor (game) {
    super(game, "Deadeye Navigator", "Avacyn Restored", "AVR");
  }
}

module.exports = DeadeyeNavigator;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathWind extends UnimplementedCard {
  constructor(game) {
    super(game, "Death Wind", "Avacyn Restored", "AVR");
  }
}

module.exports = DeathWind;

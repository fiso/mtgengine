"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DruidsFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Druid's Familiar", "Avacyn Restored", "AVR");
  }
}

module.exports = DruidsFamiliar;

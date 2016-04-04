"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DruidsFamiliar extends Card {
  constructor(game) {
    super(game, "Druid's Familiar", "Avacyn Restored", "AVR");
  }
}

module.exports = DruidsFamiliar;

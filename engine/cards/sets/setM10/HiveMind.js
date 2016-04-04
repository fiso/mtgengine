"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HiveMind extends Card {
  constructor(game) {
    super(game, "Hive Mind", "Magic 2010", "M10");
  }
}

module.exports = HiveMind;

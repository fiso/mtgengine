"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BuildersBlessing extends Card {
  constructor(game) {
    super(game, "Builder's Blessing", "Avacyn Restored", "AVR");
  }
}

module.exports = BuildersBlessing;

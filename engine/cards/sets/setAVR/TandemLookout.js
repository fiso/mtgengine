"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TandemLookout extends Card {
  constructor(game) {
    super(game, "Tandem Lookout", "Avacyn Restored", "AVR");
  }
}

module.exports = TandemLookout;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YewSpirit extends Card {
  constructor(game) {
    super(game, "Yew Spirit", "Avacyn Restored", "AVR");
  }
}

module.exports = YewSpirit;

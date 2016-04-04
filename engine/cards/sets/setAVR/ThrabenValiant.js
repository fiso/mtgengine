"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThrabenValiant extends Card {
  constructor(game) {
    super(game, "Thraben Valiant", "Avacyn Restored", "AVR");
  }
}

module.exports = ThrabenValiant;

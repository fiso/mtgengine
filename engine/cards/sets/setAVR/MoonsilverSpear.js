"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoonsilverSpear extends Card {
  constructor(game) {
    super(game, "Moonsilver Spear", "Avacyn Restored", "AVR");
  }
}

module.exports = MoonsilverSpear;

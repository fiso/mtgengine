"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FavorableWinds extends Card {
  constructor(game) {
    super(game, "Favorable Winds", "Avacyn Restored", "AVR");
  }
}

module.exports = FavorableWinds;

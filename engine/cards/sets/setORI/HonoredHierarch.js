"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HonoredHierarch extends Card {
  constructor(game) {
    super(game, "Honored Hierarch", "Magic Origins", "ORI");
  }
}

module.exports = HonoredHierarch;

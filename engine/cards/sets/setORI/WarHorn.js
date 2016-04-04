"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarHorn extends Card {
  constructor(game) {
    super(game, "War Horn", "Magic Origins", "ORI");
  }
}

module.exports = WarHorn;

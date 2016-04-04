"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoubleHeader extends Card {
  constructor(game) {
    super(game, "Double Header", "Unhinged", "UNH");
  }
}

module.exports = DoubleHeader;

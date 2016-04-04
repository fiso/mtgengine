"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DaysUndoing extends Card {
  constructor(game) {
    super(game, "Day's Undoing", "Magic Origins", "ORI");
  }
}

module.exports = DaysUndoing;

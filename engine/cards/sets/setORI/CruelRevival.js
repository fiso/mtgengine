"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CruelRevival extends Card {
  constructor(game) {
    super(game, "Cruel Revival", "Magic Origins", "ORI");
  }
}

module.exports = CruelRevival;

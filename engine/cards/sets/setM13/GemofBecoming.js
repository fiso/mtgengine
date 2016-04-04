"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GemofBecoming extends Card {
  constructor(game) {
    super(game, "Gem of Becoming", "Magic 2013", "M13");
  }
}

module.exports = GemofBecoming;

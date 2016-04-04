"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EssenceFilter extends Card {
  constructor(game) {
    super(game, "Essence Filter", "Ice Age", "ICE");
  }
}

module.exports = EssenceFilter;

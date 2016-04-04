"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmblazonedGolem extends Card {
  constructor(game) {
    super(game, "Emblazoned Golem", "Apocalypse", "APC");
  }
}

module.exports = EmblazonedGolem;

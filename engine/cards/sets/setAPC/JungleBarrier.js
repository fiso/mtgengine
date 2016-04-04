"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JungleBarrier extends Card {
  constructor(game) {
    super(game, "Jungle Barrier", "Apocalypse", "APC");
  }
}

module.exports = JungleBarrier;

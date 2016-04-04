"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeadRingers extends Card {
  constructor(game) {
    super(game, "Dead Ringers", "Apocalypse", "APC");
  }
}

module.exports = DeadRingers;

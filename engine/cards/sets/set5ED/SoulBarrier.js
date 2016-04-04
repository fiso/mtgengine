"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulBarrier extends Card {
  constructor(game) {
    super(game, "Soul Barrier", "Fifth Edition", "5ED");
  }
}

module.exports = SoulBarrier;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MomentofSilence extends Card {
  constructor(game) {
    super(game, "Moment of Silence", "Mercadian Masques", "MMQ");
  }
}

module.exports = MomentofSilence;

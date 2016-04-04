"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MomentofSilence extends UnimplementedCard {
  constructor(game) {
    super(game, "Moment of Silence", "Mercadian Masques", "MMQ");
  }
}

module.exports = MomentofSilence;

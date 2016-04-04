"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaveofReckoning extends UnimplementedCard {
  constructor(game) {
    super(game, "Wave of Reckoning", "Mercadian Masques", "MMQ");
  }
}

module.exports = WaveofReckoning;

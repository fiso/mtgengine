"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StasisSnare extends UnimplementedCard {
  constructor(game) {
    super(game, "Stasis Snare", "Battle for Zendikar", "BFZ");
  }
}

module.exports = StasisSnare;

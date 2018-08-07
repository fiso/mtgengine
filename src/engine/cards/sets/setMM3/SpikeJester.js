"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpikeJester extends UnimplementedCard {
  constructor (game) {
    super(game, "Spike Jester", "Modern Masters 2017", "MM3");
  }
}

module.exports = SpikeJester;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoundinSilence extends UnimplementedCard {
  constructor (game) {
    super(game, "Bound in Silence", "Modern Masters", "MMA");
  }
}

module.exports = BoundinSilence;

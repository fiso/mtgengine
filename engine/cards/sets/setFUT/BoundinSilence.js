"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoundinSilence extends UnimplementedCard {
  constructor(game) {
    super(game, "Bound in Silence", "Future Sight", "FUT");
  }
}

module.exports = BoundinSilence;

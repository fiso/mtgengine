"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoundinSilence extends Card {
  constructor(game) {
    super(game, "Bound in Silence", "Future Sight", "FUT");
  }
}

module.exports = BoundinSilence;

"use strict";
const Constants = require ("../../../Constants");
const BoundinSilenceBase = require("../setMMA/BoundinSilence");

class BoundinSilence extends BoundinSilenceBase {
  constructor (game) {
    super(game, "Bound in Silence", "Future Sight", "FUT");
  }
}

module.exports = BoundinSilence;

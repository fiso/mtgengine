"use strict";
const Constants = require ("../../../Constants");
const BoundinSilenceBase = require("../setFUT/BoundinSilence");

class BoundinSilence extends BoundinSilenceBase {
  constructor(game) {
    super(game, "Bound in Silence", "Modern Masters", "MMA");
  }
}

module.exports = BoundinSilence;

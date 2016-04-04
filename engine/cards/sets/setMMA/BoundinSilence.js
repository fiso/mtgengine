"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoundinSilenceBase = require("../setFUT/BoundinSilence.js");

class BoundinSilence extends BoundinSilenceBase {
  constructor(game) {
    super(game, "Bound in Silence", "Modern Masters", "MMA");
  }
}

module.exports = BoundinSilence;

"use strict";
const Constants = require ("../../../Constants");
const HyalopterousLemureBase = require("../setMED/HyalopterousLemure");

class HyalopterousLemure extends HyalopterousLemureBase {
  constructor (game) {
    super(game, "Hyalopterous Lemure", "Ice Age", "ICE");
  }
}

module.exports = HyalopterousLemure;

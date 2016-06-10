"use strict";
const Constants = require ("../../../Constants");
const HyalopterousLemureBase = require("../setICE/HyalopterousLemure");

class HyalopterousLemure extends HyalopterousLemureBase {
  constructor (game) {
    super(game, "Hyalopterous Lemure", "Masters Edition", "MED");
  }
}

module.exports = HyalopterousLemure;

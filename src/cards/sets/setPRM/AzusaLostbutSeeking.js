"use strict";
const Constants = require ("../../../Constants");
const AzusaLostbutSeekingBase = require("../setA25/AzusaLostbutSeeking");

class AzusaLostbutSeeking extends AzusaLostbutSeekingBase {
  constructor (game) {
    super(game, "Azusa, Lost but Seeking", "Magic Online Promos", "PRM");
  }
}

module.exports = AzusaLostbutSeeking;

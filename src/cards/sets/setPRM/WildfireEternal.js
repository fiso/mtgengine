"use strict";
const Constants = require ("../../../Constants");
const WildfireEternalBase = require("../setHOU/WildfireEternal");

class WildfireEternal extends WildfireEternalBase {
  constructor (game) {
    super(game, "Wildfire Eternal", "Magic Online Promos", "PRM");
  }
}

module.exports = WildfireEternal;

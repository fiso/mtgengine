"use strict";
const Constants = require ("../../../Constants");
const WildfireEternalBase = require("../setHOU/WildfireEternal");

class WildfireEternal extends WildfireEternalBase {
  constructor (game) {
    super(game, "Wildfire Eternal", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = WildfireEternal;

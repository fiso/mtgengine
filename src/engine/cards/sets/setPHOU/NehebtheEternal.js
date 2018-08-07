"use strict";
const Constants = require ("../../../Constants");
const NehebtheEternalBase = require("../setHOU/NehebtheEternal");

class NehebtheEternal extends NehebtheEternalBase {
  constructor (game) {
    super(game, "Neheb, the Eternal", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = NehebtheEternal;

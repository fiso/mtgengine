"use strict";
const Constants = require ("../../../Constants");
const TrevatheRenewerBase = require("../setDDE/TrevatheRenewer");

class TrevatheRenewer extends TrevatheRenewerBase {
  constructor (game) {
    super(game, "Treva, the Renewer", "Magic Online Promos", "PRM");
  }
}

module.exports = TrevatheRenewer;

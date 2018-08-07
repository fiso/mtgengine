"use strict";
const Constants = require ("../../../Constants");
const TrevatheRenewerBase = require("../setDDE/TrevatheRenewer");

class TrevatheRenewer extends TrevatheRenewerBase {
  constructor (game) {
    super(game, "Treva, the Renewer", "Invasion", "INV");
  }
}

module.exports = TrevatheRenewer;

"use strict";
const Constants = require ("../../../Constants");
const AmmitEternalBase = require("../setHOU/AmmitEternal");

class AmmitEternal extends AmmitEternalBase {
  constructor (game) {
    super(game, "Ammit Eternal", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = AmmitEternal;

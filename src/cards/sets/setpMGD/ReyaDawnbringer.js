"use strict";
const Constants = require ("../../../Constants");
const ReyaDawnbringerBase = require("../setDD3_DVD/ReyaDawnbringer");

class ReyaDawnbringer extends ReyaDawnbringerBase {
  constructor(game) {
    super(game, "Reya Dawnbringer", "Magic Game Day", "pMGD");
  }
}

module.exports = ReyaDawnbringer;

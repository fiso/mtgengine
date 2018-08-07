"use strict";
const Constants = require ("../../../Constants");
const ChasmSkulkerBase = require("../setC16/ChasmSkulker");

class ChasmSkulker extends ChasmSkulkerBase {
  constructor (game) {
    super(game, "Chasm Skulker", "Magic 2015", "M15");
  }
}

module.exports = ChasmSkulker;

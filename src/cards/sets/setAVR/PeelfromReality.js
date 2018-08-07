"use strict";
const Constants = require ("../../../Constants");
const PeelfromRealityBase = require("../setDDO/PeelfromReality");

class PeelfromReality extends PeelfromRealityBase {
  constructor (game) {
    super(game, "Peel from Reality", "Avacyn Restored", "AVR");
  }
}

module.exports = PeelfromReality;

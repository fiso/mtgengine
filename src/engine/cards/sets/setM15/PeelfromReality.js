"use strict";
const Constants = require ("../../../Constants");
const PeelfromRealityBase = require("../setDDO/PeelfromReality");

class PeelfromReality extends PeelfromRealityBase {
  constructor (game) {
    super(game, "Peel from Reality", "Magic 2015", "M15");
  }
}

module.exports = PeelfromReality;

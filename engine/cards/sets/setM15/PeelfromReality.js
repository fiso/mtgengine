"use strict";
const Constants = require ("../../../Constants");
const PeelfromRealityBase = require("../setAVR/PeelfromReality");

class PeelfromReality extends PeelfromRealityBase {
  constructor(game) {
    super(game, "Peel from Reality", "Magic 2015 Core Set", "M15");
  }
}

module.exports = PeelfromReality;

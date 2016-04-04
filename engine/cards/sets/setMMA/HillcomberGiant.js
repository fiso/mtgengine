"use strict";
const Constants = require ("../../../Constants");
const HillcomberGiantBase = require("../setLRW/HillcomberGiant");

class HillcomberGiant extends HillcomberGiantBase {
  constructor(game) {
    super(game, "Hillcomber Giant", "Modern Masters", "MMA");
  }
}

module.exports = HillcomberGiant;

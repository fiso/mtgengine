"use strict";
const Constants = require ("../../../Constants");
const HillcomberGiantBase = require("../setMMA/HillcomberGiant");

class HillcomberGiant extends HillcomberGiantBase {
  constructor (game) {
    super(game, "Hillcomber Giant", "Lorwyn", "LRW");
  }
}

module.exports = HillcomberGiant;

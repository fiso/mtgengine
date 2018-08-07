"use strict";
const Constants = require ("../../../Constants");
const LysAlanaScarbladeBase = require("../setEMA/LysAlanaScarblade");

class LysAlanaScarblade extends LysAlanaScarbladeBase {
  constructor (game) {
    super(game, "Lys Alana Scarblade", "Lorwyn", "LRW");
  }
}

module.exports = LysAlanaScarblade;

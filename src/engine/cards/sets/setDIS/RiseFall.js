"use strict";
const Constants = require ("../../../Constants");
const RiseFallBase = require("../setDDH/RiseFall");

class RiseFall extends RiseFallBase {
  constructor (game) {
    super(game, "Rise // Fall", "Dissension", "DIS");
  }
}

module.exports = RiseFall;

"use strict";
const Constants = require ("../../../Constants");
const MastersCallBase = require("../setMBS/MastersCall");

class MastersCall extends MastersCallBase {
  constructor (game) {
    super(game, "Master's Call", "Magic Online Promos", "PRM");
  }
}

module.exports = MastersCall;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MastersCallBase = require("../setMBS/MastersCall.js");

class MastersCall extends MastersCallBase {
  constructor(game) {
    super(game, "Master's Call", "WPN and Gateway", "pWPN");
  }
}

module.exports = MastersCall;

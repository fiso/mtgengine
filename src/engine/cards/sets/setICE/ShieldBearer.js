"use strict";
const Constants = require ("../../../Constants");
const ShieldBearerBase = require("../setME2/ShieldBearer");

class ShieldBearer extends ShieldBearerBase {
  constructor (game) {
    super(game, "Shield Bearer", "Ice Age", "ICE");
  }
}

module.exports = ShieldBearer;

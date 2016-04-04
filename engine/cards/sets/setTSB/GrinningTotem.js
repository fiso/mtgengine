"use strict";
const Constants = require ("../../../Constants");
const GrinningTotemBase = require("../set6ED/GrinningTotem");

class GrinningTotem extends GrinningTotemBase {
  constructor(game) {
    super(game, "Grinning Totem", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = GrinningTotem;

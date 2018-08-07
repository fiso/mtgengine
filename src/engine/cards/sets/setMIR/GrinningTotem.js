"use strict";
const Constants = require ("../../../Constants");
const GrinningTotemBase = require("../setTSB/GrinningTotem");

class GrinningTotem extends GrinningTotemBase {
  constructor (game) {
    super(game, "Grinning Totem", "Mirage", "MIR");
  }
}

module.exports = GrinningTotem;

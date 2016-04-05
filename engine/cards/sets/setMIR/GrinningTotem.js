"use strict";
const Constants = require ("../../../Constants");
const GrinningTotemBase = require("../set6ED/GrinningTotem");

class GrinningTotem extends GrinningTotemBase {
  constructor(game) {
    super(game, "Grinning Totem", "Mirage", "MIR");
  }
}

module.exports = GrinningTotem;

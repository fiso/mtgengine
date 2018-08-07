"use strict";
const Constants = require ("../../../Constants");
const GrinningTotemBase = require("../setTSB/GrinningTotem");

class GrinningTotem extends GrinningTotemBase {
  constructor (game) {
    super(game, "Grinning Totem", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GrinningTotem;

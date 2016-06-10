"use strict";
const Constants = require ("../../../Constants");
const GraniteGargoyleBase = require("../setCED/GraniteGargoyle");

class GraniteGargoyle extends GraniteGargoyleBase {
  constructor (game) {
    super(game, "Granite Gargoyle", "Revised Edition", "3ED");
  }
}

module.exports = GraniteGargoyle;

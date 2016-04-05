"use strict";
const Constants = require ("../../../Constants");
const GraniteGargoyleBase = require("../setCED/GraniteGargoyle");

class GraniteGargoyle extends GraniteGargoyleBase {
  constructor(game) {
    super(game, "Granite Gargoyle", "Limited Edition Alpha", "LEA");
  }
}

module.exports = GraniteGargoyle;

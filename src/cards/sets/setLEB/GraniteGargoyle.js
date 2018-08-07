"use strict";
const Constants = require ("../../../Constants");
const GraniteGargoyleBase = require("../setMED/GraniteGargoyle");

class GraniteGargoyle extends GraniteGargoyleBase {
  constructor (game) {
    super(game, "Granite Gargoyle", "Limited Edition Beta", "LEB");
  }
}

module.exports = GraniteGargoyle;

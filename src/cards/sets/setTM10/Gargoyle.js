"use strict";
const Constants = require ("../../../Constants");
const GargoyleBase = require("../setTCMA/Gargoyle");

class Gargoyle extends GargoyleBase {
  constructor (game) {
    super(game, "Gargoyle", "Magic 2010 Tokens", "TM10");
  }
}

module.exports = Gargoyle;

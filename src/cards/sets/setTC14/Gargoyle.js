"use strict";
const Constants = require ("../../../Constants");
const GargoyleBase = require("../setTCMA/Gargoyle");

class Gargoyle extends GargoyleBase {
  constructor (game) {
    super(game, "Gargoyle", "Commander 2014 Tokens", "TC14");
  }
}

module.exports = Gargoyle;

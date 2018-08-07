"use strict";
const Constants = require ("../../../Constants");
const DarksteelGargoyleBase = require("../setTD2/DarksteelGargoyle");

class DarksteelGargoyle extends DarksteelGargoyleBase {
  constructor (game) {
    super(game, "Darksteel Gargoyle", "Darksteel", "DST");
  }
}

module.exports = DarksteelGargoyle;

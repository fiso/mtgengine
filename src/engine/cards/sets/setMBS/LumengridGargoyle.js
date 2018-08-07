"use strict";
const Constants = require ("../../../Constants");
const LumengridGargoyleBase = require("../setTD2/LumengridGargoyle");

class LumengridGargoyle extends LumengridGargoyleBase {
  constructor (game) {
    super(game, "Lumengrid Gargoyle", "Mirrodin Besieged", "MBS");
  }
}

module.exports = LumengridGargoyle;

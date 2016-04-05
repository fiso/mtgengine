"use strict";
const Constants = require ("../../../Constants");
const ForgeDevilBase = require("../setDKA/ForgeDevil");

class ForgeDevil extends ForgeDevilBase {
  constructor(game) {
    super(game, "Forge Devil", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ForgeDevil;

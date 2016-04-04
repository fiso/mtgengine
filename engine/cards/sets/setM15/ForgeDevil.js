"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForgeDevilBase = require("../setDKA/ForgeDevil.js");

class ForgeDevil extends ForgeDevilBase {
  constructor(game) {
    super(game, "Forge Devil", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ForgeDevil;

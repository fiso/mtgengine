"use strict";
const Constants = require ("../../../Constants");
const ManaFlareBase = require("../setMED/ManaFlare");

class ManaFlare extends ManaFlareBase {
  constructor (game) {
    super(game, "Mana Flare", "Revised Edition", "3ED");
  }
}

module.exports = ManaFlare;

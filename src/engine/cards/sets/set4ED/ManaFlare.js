"use strict";
const Constants = require ("../../../Constants");
const ManaFlareBase = require("../setMED/ManaFlare");

class ManaFlare extends ManaFlareBase {
  constructor (game) {
    super(game, "Mana Flare", "Fourth Edition", "4ED");
  }
}

module.exports = ManaFlare;

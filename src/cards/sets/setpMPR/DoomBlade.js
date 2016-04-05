"use strict";
const Constants = require ("../../../Constants");
const DoomBladeBase = require("../setM10/DoomBlade");

class DoomBlade extends DoomBladeBase {
  constructor(game) {
    super(game, "Doom Blade", "Magic Player Rewards", "pMPR");
  }
}

module.exports = DoomBlade;

"use strict";
const Constants = require ("../../../Constants");
const DoomBladeBase = require("../setE02/DoomBlade");

class DoomBlade extends DoomBladeBase {
  constructor (game) {
    super(game, "Doom Blade", "Magic Player Rewards 2011", "P11");
  }
}

module.exports = DoomBlade;

"use strict";
const Constants = require ("../../../Constants");
const DoomBladeBase = require("../setE02/DoomBlade");

class DoomBlade extends DoomBladeBase {
  constructor (game) {
    super(game, "Doom Blade", "Magic 2010", "M10");
  }
}

module.exports = DoomBlade;

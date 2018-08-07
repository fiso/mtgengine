"use strict";
const Constants = require ("../../../Constants");
const DoomBladeBase = require("../setE02/DoomBlade");

class DoomBlade extends DoomBladeBase {
  constructor (game) {
    super(game, "Doom Blade", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = DoomBlade;

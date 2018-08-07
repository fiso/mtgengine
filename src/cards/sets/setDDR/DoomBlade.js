"use strict";
const Constants = require ("../../../Constants");
const DoomBladeBase = require("../setE02/DoomBlade");

class DoomBlade extends DoomBladeBase {
  constructor (game) {
    super(game, "Doom Blade", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = DoomBlade;

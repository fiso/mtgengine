"use strict";
const Constants = require ("../../../Constants");
const DoomBladeBase = require("../setM10/DoomBlade");

class DoomBlade extends DoomBladeBase {
  constructor (game) {
    super(game, "Doom Blade", "Magic 2014 Core Set", "M14");
  }
}

module.exports = DoomBlade;

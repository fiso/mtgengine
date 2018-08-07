"use strict";
const Constants = require ("../../../Constants");
const NoxiousGhoulBase = require("../setHOP/NoxiousGhoul");

class NoxiousGhoul extends NoxiousGhoulBase {
  constructor (game) {
    super(game, "Noxious Ghoul", "Legions", "LGN");
  }
}

module.exports = NoxiousGhoul;

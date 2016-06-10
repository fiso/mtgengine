"use strict";
const Constants = require ("../../../Constants");
const NoxiousGhoulBase = require("../setLGN/NoxiousGhoul");

class NoxiousGhoul extends NoxiousGhoulBase {
  constructor (game) {
    super(game, "Noxious Ghoul", "Planechase", "HOP");
  }
}

module.exports = NoxiousGhoul;

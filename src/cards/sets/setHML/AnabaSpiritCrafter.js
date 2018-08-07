"use strict";
const Constants = require ("../../../Constants");
const AnabaSpiritCrafterBase = require("../setME3/AnabaSpiritCrafter");

class AnabaSpiritCrafter extends AnabaSpiritCrafterBase {
  constructor (game) {
    super(game, "Anaba Spirit Crafter", "Homelands", "HML");
  }
}

module.exports = AnabaSpiritCrafter;

"use strict";
const Constants = require ("../../../Constants");
const AnabaSpiritCrafterBase = require("../setHML/AnabaSpiritCrafter");

class AnabaSpiritCrafter extends AnabaSpiritCrafterBase {
  constructor (game) {
    super(game, "Anaba Spirit Crafter", "Masters Edition III", "ME3");
  }
}

module.exports = AnabaSpiritCrafter;

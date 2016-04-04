"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnabaSpiritCrafterBase = require("../setHML/AnabaSpiritCrafter.js");

class AnabaSpiritCrafter extends AnabaSpiritCrafterBase {
  constructor(game) {
    super(game, "Anaba Spirit Crafter", "Masters Edition III", "ME3");
  }
}

module.exports = AnabaSpiritCrafter;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhispersoftheMuseBase = require("../setTMP/WhispersoftheMuse.js");

class WhispersoftheMuse extends WhispersoftheMuseBase {
  constructor(game) {
    super(game, "Whispers of the Muse", "Tempest Remastered", "TPR");
  }
}

module.exports = WhispersoftheMuse;

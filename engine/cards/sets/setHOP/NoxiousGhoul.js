"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NoxiousGhoulBase = require("../setLGN/NoxiousGhoul.js");

class NoxiousGhoul extends NoxiousGhoulBase {
  constructor(game) {
    super(game, "Noxious Ghoul", "Planechase", "HOP");
  }
}

module.exports = NoxiousGhoul;

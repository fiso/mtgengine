"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonscaleGeneralBase = require("../setFRF/DragonscaleGeneral.js");

class DragonscaleGeneral extends DragonscaleGeneralBase {
  constructor(game) {
    super(game, "Dragonscale General", "Media Inserts", "pMEI");
  }
}

module.exports = DragonscaleGeneral;

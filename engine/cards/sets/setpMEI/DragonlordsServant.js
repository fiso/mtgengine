"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonlordsServantBase = require("../setDTK/DragonlordsServant.js");

class DragonlordsServant extends DragonlordsServantBase {
  constructor(game) {
    super(game, "Dragonlord's Servant", "Media Inserts", "pMEI");
  }
}

module.exports = DragonlordsServant;

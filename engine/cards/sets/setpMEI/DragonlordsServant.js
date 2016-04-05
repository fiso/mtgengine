"use strict";
const Constants = require ("../../../Constants");
const DragonlordsServantBase = require("../setDTK/DragonlordsServant");

class DragonlordsServant extends DragonlordsServantBase {
  constructor(game) {
    super(game, "Dragonlord's Servant", "Media Inserts", "pMEI");
  }
}

module.exports = DragonlordsServant;

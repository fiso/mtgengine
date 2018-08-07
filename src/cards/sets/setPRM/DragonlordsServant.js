"use strict";
const Constants = require ("../../../Constants");
const DragonlordsServantBase = require("../setIMA/DragonlordsServant");

class DragonlordsServant extends DragonlordsServantBase {
  constructor (game) {
    super(game, "Dragonlord's Servant", "Magic Online Promos", "PRM");
  }
}

module.exports = DragonlordsServant;

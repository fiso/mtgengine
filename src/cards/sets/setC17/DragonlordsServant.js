"use strict";
const Constants = require ("../../../Constants");
const DragonlordsServantBase = require("../setIMA/DragonlordsServant");

class DragonlordsServant extends DragonlordsServantBase {
  constructor (game) {
    super(game, "Dragonlord's Servant", "Commander 2017", "C17");
  }
}

module.exports = DragonlordsServant;

"use strict";
const Constants = require ("../../../Constants");
const DragonlordsServantBase = require("../setIMA/DragonlordsServant");

class DragonlordsServant extends DragonlordsServantBase {
  constructor (game) {
    super(game, "Dragonlord's Servant", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DragonlordsServant;

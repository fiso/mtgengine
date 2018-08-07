"use strict";
const Constants = require ("../../../Constants");
const DragonRoostBase = require("../set10E/DragonRoost");

class DragonRoost extends DragonRoostBase {
  constructor (game) {
    super(game, "Dragon Roost", "Onslaught", "ONS");
  }
}

module.exports = DragonRoost;

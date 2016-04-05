"use strict";
const Constants = require ("../../../Constants");
const DragonRoostBase = require("../setONS/DragonRoost");

class DragonRoost extends DragonRoostBase {
  constructor(game) {
    super(game, "Dragon Roost", "Tenth Edition", "10E");
  }
}

module.exports = DragonRoost;

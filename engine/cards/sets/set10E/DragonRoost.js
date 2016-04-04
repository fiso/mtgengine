"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonRoostBase = require("../setONS/DragonRoost.js");

class DragonRoost extends DragonRoostBase {
  constructor(game) {
    super(game, "Dragon Roost", "Tenth Edition", "10E");
  }
}

module.exports = DragonRoost;

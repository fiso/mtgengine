"use strict";
const Constants = require ("../../../Constants");
const DroolingGroodionBase = require("../setMM2/DroolingGroodion");

class DroolingGroodion extends DroolingGroodionBase {
  constructor (game) {
    super(game, "Drooling Groodion", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DroolingGroodion;

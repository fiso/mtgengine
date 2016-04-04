"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DroolingGroodionBase = require("../setDDM/DroolingGroodion.js");

class DroolingGroodion extends DroolingGroodionBase {
  constructor(game) {
    super(game, "Drooling Groodion", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DroolingGroodion;

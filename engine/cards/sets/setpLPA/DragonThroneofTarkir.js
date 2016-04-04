"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonThroneofTarkirBase = require("../setKTK/DragonThroneofTarkir.js");

class DragonThroneofTarkir extends DragonThroneofTarkirBase {
  constructor(game) {
    super(game, "Dragon Throne of Tarkir", "Launch Parties", "pLPA");
  }
}

module.exports = DragonThroneofTarkir;

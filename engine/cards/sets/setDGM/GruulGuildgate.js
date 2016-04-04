"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GruulGuildgateBase = require("../setC13/GruulGuildgate.js");

class GruulGuildgate extends GruulGuildgateBase {
  constructor(game) {
    super(game, "Gruul Guildgate", "Dragon's Maze", "DGM");
  }
}

module.exports = GruulGuildgate;

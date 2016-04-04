"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BorosGuildgateBase = require("../setC13/BorosGuildgate.js");

class BorosGuildgate extends BorosGuildgateBase {
  constructor(game) {
    super(game, "Boros Guildgate", "Dragon's Maze", "DGM");
  }
}

module.exports = BorosGuildgate;

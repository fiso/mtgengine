"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PunishtheEnemy extends Card {
  constructor(game) {
    super(game, "Punish the Enemy", "Dragon's Maze", "DGM");
  }
}

module.exports = PunishtheEnemy;

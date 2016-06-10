"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PunishtheEnemy extends UnimplementedCard {
  constructor (game) {
    super(game, "Punish the Enemy", "Dragon's Maze", "DGM");
  }
}

module.exports = PunishtheEnemy;

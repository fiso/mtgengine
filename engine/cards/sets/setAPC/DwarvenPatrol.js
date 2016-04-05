"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenPatrol extends UnimplementedCard {
  constructor(game) {
    super(game, "Dwarven Patrol", "Apocalypse", "APC");
  }
}

module.exports = DwarvenPatrol;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenPatrol extends Card {
  constructor(game) {
    super(game, "Dwarven Patrol", "Apocalypse", "APC");
  }
}

module.exports = DwarvenPatrol;

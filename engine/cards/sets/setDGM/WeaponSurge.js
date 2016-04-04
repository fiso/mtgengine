"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WeaponSurge extends Card {
  constructor(game) {
    super(game, "Weapon Surge", "Dragon's Maze", "DGM");
  }
}

module.exports = WeaponSurge;

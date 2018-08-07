"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeaponSurge extends UnimplementedCard {
  constructor (game) {
    super(game, "Weapon Surge", "Dragon's Maze", "DGM");
  }
}

module.exports = WeaponSurge;

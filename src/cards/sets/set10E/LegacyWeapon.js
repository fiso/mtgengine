"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LegacyWeapon extends UnimplementedCard {
  constructor (game) {
    super(game, "Legacy Weapon", "Tenth Edition", "10E");
  }
}

module.exports = LegacyWeapon;

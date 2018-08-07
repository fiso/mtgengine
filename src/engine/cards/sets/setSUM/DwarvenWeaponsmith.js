"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenWeaponsmith extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Weaponsmith", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = DwarvenWeaponsmith;

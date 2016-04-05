"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RenownedWeaponsmith extends UnimplementedCard {
  constructor(game) {
    super(game, "Renowned Weaponsmith", "Fate Reforged", "FRF");
  }
}

module.exports = RenownedWeaponsmith;

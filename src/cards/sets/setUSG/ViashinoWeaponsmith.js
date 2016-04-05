"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViashinoWeaponsmith extends UnimplementedCard {
  constructor(game) {
    super(game, "Viashino Weaponsmith", "Urza's Saga", "USG");
  }
}

module.exports = ViashinoWeaponsmith;

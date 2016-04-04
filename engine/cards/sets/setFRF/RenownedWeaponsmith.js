"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RenownedWeaponsmith extends Card {
  constructor(game) {
    super(game, "Renowned Weaponsmith", "Fate Reforged", "FRF");
  }
}

module.exports = RenownedWeaponsmith;

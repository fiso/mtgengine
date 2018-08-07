"use strict";
const Constants = require ("../../../Constants");
const LegacyWeaponBase = require("../set10E/LegacyWeapon");

class LegacyWeapon extends LegacyWeaponBase {
  constructor (game) {
    super(game, "Legacy Weapon", "Apocalypse", "APC");
  }
}

module.exports = LegacyWeapon;

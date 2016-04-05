"use strict";
const Constants = require ("../../../Constants");
const DwarvenWeaponsmithBase = require("../setATQ/DwarvenWeaponsmith");

class DwarvenWeaponsmith extends DwarvenWeaponsmithBase {
  constructor(game) {
    super(game, "Dwarven Weaponsmith", "Revised Edition", "3ED");
  }
}

module.exports = DwarvenWeaponsmith;

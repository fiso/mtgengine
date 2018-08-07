"use strict";
const Constants = require ("../../../Constants");
const DwarvenWeaponsmithBase = require("../setSUM/DwarvenWeaponsmith");

class DwarvenWeaponsmith extends DwarvenWeaponsmithBase {
  constructor (game) {
    super(game, "Dwarven Weaponsmith", "Antiquities", "ATQ");
  }
}

module.exports = DwarvenWeaponsmith;

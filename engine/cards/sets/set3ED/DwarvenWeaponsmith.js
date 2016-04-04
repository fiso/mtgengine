"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DwarvenWeaponsmithBase = require("../setATQ/DwarvenWeaponsmith.js");

class DwarvenWeaponsmith extends DwarvenWeaponsmithBase {
  constructor(game) {
    super(game, "Dwarven Weaponsmith", "Revised Edition", "3ED");
  }
}

module.exports = DwarvenWeaponsmith;

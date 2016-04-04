"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LegacyWeaponBase = require("../setAPC/LegacyWeapon.js");

class LegacyWeapon extends LegacyWeaponBase {
  constructor(game) {
    super(game, "Legacy Weapon", "Tenth Edition", "10E");
  }
}

module.exports = LegacyWeapon;

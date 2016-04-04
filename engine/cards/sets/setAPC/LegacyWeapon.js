"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LegacyWeapon extends Card {
  constructor(game) {
    super(game, "Legacy Weapon", "Apocalypse", "APC");
  }
}

module.exports = LegacyWeapon;

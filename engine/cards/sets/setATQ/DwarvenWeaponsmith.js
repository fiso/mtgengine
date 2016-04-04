"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenWeaponsmith extends Card {
  constructor(game) {
    super(game, "Dwarven Weaponsmith", "Antiquities", "ATQ");
  }
}

module.exports = DwarvenWeaponsmith;

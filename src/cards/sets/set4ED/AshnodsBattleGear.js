"use strict";
const Constants = require ("../../../Constants");
const AshnodsBattleGearBase = require("../setATQ/AshnodsBattleGear");

class AshnodsBattleGear extends AshnodsBattleGearBase {
  constructor(game) {
    super(game, "Ashnod's Battle Gear", "Fourth Edition", "4ED");
  }
}

module.exports = AshnodsBattleGear;

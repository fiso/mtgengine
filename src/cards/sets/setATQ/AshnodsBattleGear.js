"use strict";
const Constants = require ("../../../Constants");
const AshnodsBattleGearBase = require("../set4ED/AshnodsBattleGear");

class AshnodsBattleGear extends AshnodsBattleGearBase {
  constructor (game) {
    super(game, "Ashnod's Battle Gear", "Antiquities", "ATQ");
  }
}

module.exports = AshnodsBattleGear;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AshnodsBattleGearBase = require("../setATQ/AshnodsBattleGear.js");

class AshnodsBattleGear extends AshnodsBattleGearBase {
  constructor(game) {
    super(game, "Ashnod's Battle Gear", "Fourth Edition", "4ED");
  }
}

module.exports = AshnodsBattleGear;

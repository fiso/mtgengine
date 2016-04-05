"use strict";
const Constants = require ("../../../Constants");
const PhyrexianBattlefliesBase = require("../setDDE/PhyrexianBattleflies");

class PhyrexianBattleflies extends PhyrexianBattlefliesBase {
  constructor(game) {
    super(game, "Phyrexian Battleflies", "Invasion", "INV");
  }
}

module.exports = PhyrexianBattleflies;

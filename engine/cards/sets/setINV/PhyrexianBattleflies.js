"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianBattlefliesBase = require("../setDDE/PhyrexianBattleflies.js");

class PhyrexianBattleflies extends PhyrexianBattlefliesBase {
  constructor(game) {
    super(game, "Phyrexian Battleflies", "Invasion", "INV");
  }
}

module.exports = PhyrexianBattleflies;

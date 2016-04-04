"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BartelRuneaxeBase = require("../setLEG/BartelRuneaxe.js");

class BartelRuneaxe extends BartelRuneaxeBase {
  constructor(game) {
    super(game, "Bartel Runeaxe", "Masters Edition III", "ME3");
  }
}

module.exports = BartelRuneaxe;

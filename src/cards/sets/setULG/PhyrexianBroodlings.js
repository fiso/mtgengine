"use strict";
const Constants = require ("../../../Constants");
const PhyrexianBroodlingsBase = require("../setDDE/PhyrexianBroodlings");

class PhyrexianBroodlings extends PhyrexianBroodlingsBase {
  constructor (game) {
    super(game, "Phyrexian Broodlings", "Urza's Legacy", "ULG");
  }
}

module.exports = PhyrexianBroodlings;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianBroodlingsBase = require("../setDDE/PhyrexianBroodlings.js");

class PhyrexianBroodlings extends PhyrexianBroodlingsBase {
  constructor(game) {
    super(game, "Phyrexian Broodlings", "Urza's Legacy", "ULG");
  }
}

module.exports = PhyrexianBroodlings;

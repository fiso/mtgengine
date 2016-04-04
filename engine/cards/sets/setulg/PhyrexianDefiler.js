"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianDefilerBase = require("../setDDE/PhyrexianDefiler.js");

class PhyrexianDefiler extends PhyrexianDefilerBase {
  constructor(game) {
    super(game, "Phyrexian Defiler", "Urza's Legacy", "ULG");
  }
}

module.exports = PhyrexianDefiler;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianDefilerBase = require("../setDDE/PhyrexianDefiler.js");

class PhyrexianDefiler extends PhyrexianDefilerBase {
  constructor(game) {
    super(game, "Phyrexian Defiler", "Vintage Masters", "VMA");
  }
}

module.exports = PhyrexianDefiler;

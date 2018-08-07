"use strict";
const Constants = require ("../../../Constants");
const PhyrexianBoonBase = require("../setMED/PhyrexianBoon");

class PhyrexianBoon extends PhyrexianBoonBase {
  constructor (game) {
    super(game, "Phyrexian Boon", "Alliances", "ALL");
  }
}

module.exports = PhyrexianBoon;

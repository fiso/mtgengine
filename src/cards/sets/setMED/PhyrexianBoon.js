"use strict";
const Constants = require ("../../../Constants");
const PhyrexianBoonBase = require("../setALL/PhyrexianBoon");

class PhyrexianBoon extends PhyrexianBoonBase {
  constructor (game) {
    super(game, "Phyrexian Boon", "Masters Edition", "MED");
  }
}

module.exports = PhyrexianBoon;

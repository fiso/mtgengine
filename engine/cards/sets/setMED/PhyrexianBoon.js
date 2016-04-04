"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianBoonBase = require("../setALL/PhyrexianBoon.js");

class PhyrexianBoon extends PhyrexianBoonBase {
  constructor(game) {
    super(game, "Phyrexian Boon", "Masters Edition", "MED");
  }
}

module.exports = PhyrexianBoon;

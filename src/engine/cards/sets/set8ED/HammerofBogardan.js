"use strict";
const Constants = require ("../../../Constants");
const HammerofBogardanBase = require("../setPD2/HammerofBogardan");

class HammerofBogardan extends HammerofBogardanBase {
  constructor (game) {
    super(game, "Hammer of Bogardan", "Eighth Edition", "8ED");
  }
}

module.exports = HammerofBogardan;

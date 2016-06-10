"use strict";
const Constants = require ("../../../Constants");
const HammerofBogardanBase = require("../set6ED/HammerofBogardan");

class HammerofBogardan extends HammerofBogardanBase {
  constructor (game) {
    super(game, "Hammer of Bogardan", "Eighth Edition", "8ED");
  }
}

module.exports = HammerofBogardan;

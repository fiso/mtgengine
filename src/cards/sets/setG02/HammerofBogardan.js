"use strict";
const Constants = require ("../../../Constants");
const HammerofBogardanBase = require("../setPD2/HammerofBogardan");

class HammerofBogardan extends HammerofBogardanBase {
  constructor (game) {
    super(game, "Hammer of Bogardan", "Judge Gift Cards 2002", "G02");
  }
}

module.exports = HammerofBogardan;

"use strict";
const Constants = require ("../../../Constants");
const HammerofBogardanBase = require("../setPD2/HammerofBogardan");

class HammerofBogardan extends HammerofBogardanBase {
  constructor (game) {
    super(game, "Hammer of Bogardan", "World Championship Decks 1997", "WC97");
  }
}

module.exports = HammerofBogardan;

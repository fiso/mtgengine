"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HornedTrollBase = require("../set8ED/HornedTroll.js");

class HornedTroll extends HornedTrollBase {
  constructor(game) {
    super(game, "Horned Troll", "Mercadian Masques", "MMQ");
  }
}

module.exports = HornedTroll;

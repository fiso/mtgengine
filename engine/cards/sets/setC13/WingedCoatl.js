"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WingedCoatlBase = require("../setARB/WingedCoatl.js");

class WingedCoatl extends WingedCoatlBase {
  constructor(game) {
    super(game, "Winged Coatl", "Commander 2013 Edition", "C13");
  }
}

module.exports = WingedCoatl;

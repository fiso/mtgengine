"use strict";
const Constants = require ("../../../Constants");
const TheBruteBase = require("../set5ED/TheBrute");

class TheBrute extends TheBruteBase {
  constructor(game) {
    super(game, "The Brute", "Fourth Edition", "4ED");
  }
}

module.exports = TheBrute;

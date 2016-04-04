"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TheBruteBase = require("../set5ED/TheBrute.js");

class TheBrute extends TheBruteBase {
  constructor(game) {
    super(game, "The Brute", "Fourth Edition", "4ED");
  }
}

module.exports = TheBrute;

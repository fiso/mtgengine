"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RegrowthBase = require("../setCED/Regrowth.js");

class Regrowth extends RegrowthBase {
  constructor(game) {
    super(game, "Regrowth", "Judge Gift Program", "pJGP");
  }
}

module.exports = Regrowth;

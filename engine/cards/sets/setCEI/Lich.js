"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LichBase = require("../setCED/Lich.js");

class Lich extends LichBase {
  constructor(game) {
    super(game, "Lich", "International Collector's Edition", "CEI");
  }
}

module.exports = Lich;

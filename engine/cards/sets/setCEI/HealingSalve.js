"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HealingSalveBase = require("../setBRB/HealingSalve.js");

class HealingSalve extends HealingSalveBase {
  constructor(game) {
    super(game, "Healing Salve", "International Collector's Edition", "CEI");
  }
}

module.exports = HealingSalve;

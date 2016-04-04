"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SacrificeBase = require("../setCED/Sacrifice.js");

class Sacrifice extends SacrificeBase {
  constructor(game) {
    super(game, "Sacrifice", "International Collector's Edition", "CEI");
  }
}

module.exports = Sacrifice;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BraingeyserBase = require("../setCED/Braingeyser.js");

class Braingeyser extends BraingeyserBase {
  constructor(game) {
    super(game, "Braingeyser", "International Collector's Edition", "CEI");
  }
}

module.exports = Braingeyser;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LifelaceBase = require("../setCED/Lifelace.js");

class Lifelace extends LifelaceBase {
  constructor(game) {
    super(game, "Lifelace", "International Collector's Edition", "CEI");
  }
}

module.exports = Lifelace;

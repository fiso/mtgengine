"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PurelaceBase = require("../setCED/Purelace.js");

class Purelace extends PurelaceBase {
  constructor(game) {
    super(game, "Purelace", "International Collector's Edition", "CEI");
  }
}

module.exports = Purelace;

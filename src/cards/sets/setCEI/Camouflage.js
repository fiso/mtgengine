"use strict";
const Constants = require ("../../../Constants");
const CamouflageBase = require("../setCED/Camouflage");

class Camouflage extends CamouflageBase {
  constructor (game) {
    super(game, "Camouflage", "International Collector's Edition", "CEI");
  }
}

module.exports = Camouflage;

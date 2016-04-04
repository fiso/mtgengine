"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SinkholeBase = require("../setCED/Sinkhole.js");

class Sinkhole extends SinkholeBase {
  constructor(game) {
    super(game, "Sinkhole", "International Collector's Edition", "CEI");
  }
}

module.exports = Sinkhole;

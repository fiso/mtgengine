"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GruulTurfBase = require("../setGPT/GruulTurf.js");

class GruulTurf extends GruulTurfBase {
  constructor(game) {
    super(game, "Gruul Turf", "Planechase", "HOP");
  }
}

module.exports = GruulTurf;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AesthirGliderBase = require("../setALL/AesthirGlider.js");

class AesthirGlider extends AesthirGliderBase {
  constructor(game) {
    super(game, "Aesthir Glider", "Anthologies", "ATH");
  }
}

module.exports = AesthirGlider;

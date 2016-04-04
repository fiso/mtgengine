"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LoamLionBase = require("../setDDH/LoamLion.js");

class LoamLion extends LoamLionBase {
  constructor(game) {
    super(game, "Loam Lion", "Worldwake", "WWK");
  }
}

module.exports = LoamLion;

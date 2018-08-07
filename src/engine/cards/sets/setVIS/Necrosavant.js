"use strict";
const Constants = require ("../../../Constants");
const NecrosavantBase = require("../set6ED/Necrosavant");

class Necrosavant extends NecrosavantBase {
  constructor (game) {
    super(game, "Necrosavant", "Visions", "VIS");
  }
}

module.exports = Necrosavant;

"use strict";
const Constants = require ("../../../Constants");
const MoraleBase = require("../set4ED/Morale");

class Morale extends MoraleBase {
  constructor(game) {
    super(game, "Morale", "The Dark", "DRK");
  }
}

module.exports = Morale;

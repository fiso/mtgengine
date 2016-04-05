"use strict";
const Constants = require ("../../../Constants");
const StarlightBase = require("../setPOR/Starlight");

class Starlight extends StarlightBase {
  constructor(game) {
    super(game, "Starlight", "Seventh Edition", "7ED");
  }
}

module.exports = Starlight;

"use strict";
const Constants = require ("../../../Constants");
const BefoulBase = require("../setCHK/Befoul");

class Befoul extends BefoulBase {
  constructor(game) {
    super(game, "Befoul", "Seventh Edition", "7ED");
  }
}

module.exports = Befoul;

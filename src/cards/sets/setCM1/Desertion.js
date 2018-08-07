"use strict";
const Constants = require ("../../../Constants");
const DesertionBase = require("../setCN2/Desertion");

class Desertion extends DesertionBase {
  constructor (game) {
    super(game, "Desertion", "Commander's Arsenal", "CM1");
  }
}

module.exports = Desertion;

"use strict";
const Constants = require ("../../../Constants");
const DesertionBase = require("../setCN2/Desertion");

class Desertion extends DesertionBase {
  constructor (game) {
    super(game, "Desertion", "Visions", "VIS");
  }
}

module.exports = Desertion;

"use strict";
const Constants = require ("../../../Constants");
const DesertionBase = require("../set6ED/Desertion");

class Desertion extends DesertionBase {
  constructor (game) {
    super(game, "Desertion", "Visions", "VIS");
  }
}

module.exports = Desertion;

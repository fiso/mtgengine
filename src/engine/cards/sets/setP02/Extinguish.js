"use strict";
const Constants = require ("../../../Constants");
const ExtinguishBase = require("../setS99/Extinguish");

class Extinguish extends ExtinguishBase {
  constructor (game) {
    super(game, "Extinguish", "Portal Second Age", "P02");
  }
}

module.exports = Extinguish;

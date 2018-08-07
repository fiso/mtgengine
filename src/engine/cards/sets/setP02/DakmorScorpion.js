"use strict";
const Constants = require ("../../../Constants");
const DakmorScorpionBase = require("../setS99/DakmorScorpion");

class DakmorScorpion extends DakmorScorpionBase {
  constructor (game) {
    super(game, "Dakmor Scorpion", "Portal Second Age", "P02");
  }
}

module.exports = DakmorScorpion;

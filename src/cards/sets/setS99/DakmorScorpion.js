"use strict";
const Constants = require ("../../../Constants");
const DakmorScorpionBase = require("../setPO2/DakmorScorpion");

class DakmorScorpion extends DakmorScorpionBase {
  constructor (game) {
    super(game, "Dakmor Scorpion", "Starter 1999", "S99");
  }
}

module.exports = DakmorScorpion;

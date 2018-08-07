"use strict";
const Constants = require ("../../../Constants");
const ViselingBase = require("../setC13/Viseling");

class Viseling extends ViselingBase {
  constructor (game) {
    super(game, "Viseling", "Nemesis", "NEM");
  }
}

module.exports = Viseling;

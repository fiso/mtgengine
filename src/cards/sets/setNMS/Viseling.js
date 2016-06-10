"use strict";
const Constants = require ("../../../Constants");
const ViselingBase = require("../setC13/Viseling");

class Viseling extends ViselingBase {
  constructor (game) {
    super(game, "Viseling", "Nemesis", "NMS");
  }
}

module.exports = Viseling;

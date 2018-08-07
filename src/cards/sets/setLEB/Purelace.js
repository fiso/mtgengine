"use strict";
const Constants = require ("../../../Constants");
const PurelaceBase = require("../set4ED/Purelace");

class Purelace extends PurelaceBase {
  constructor (game) {
    super(game, "Purelace", "Limited Edition Beta", "LEB");
  }
}

module.exports = Purelace;

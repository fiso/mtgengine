"use strict";
const Constants = require ("../../../Constants");
const ArrestBase = require("../setMM2/Arrest");

class Arrest extends ArrestBase {
  constructor (game) {
    super(game, "Arrest", "IDW Comics 2012", "PIDW");
  }
}

module.exports = Arrest;

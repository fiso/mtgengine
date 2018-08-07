"use strict";
const Constants = require ("../../../Constants");
const CocoonBase = require("../setCHR/Cocoon");

class Cocoon extends CocoonBase {
  constructor (game) {
    super(game, "Cocoon", "Legends", "LEG");
  }
}

module.exports = Cocoon;

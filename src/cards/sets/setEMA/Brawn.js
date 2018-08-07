"use strict";
const Constants = require ("../../../Constants");
const BrawnBase = require("../setCM2/Brawn");

class Brawn extends BrawnBase {
  constructor (game) {
    super(game, "Brawn", "Eternal Masters", "EMA");
  }
}

module.exports = Brawn;

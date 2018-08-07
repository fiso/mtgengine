"use strict";
const Constants = require ("../../../Constants");
const SmeltBase = require("../setM19/Smelt");

class Smelt extends SmeltBase {
  constructor (game) {
    super(game, "Smelt", "Magic 2013", "M13");
  }
}

module.exports = Smelt;

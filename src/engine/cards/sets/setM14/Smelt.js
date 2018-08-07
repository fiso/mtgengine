"use strict";
const Constants = require ("../../../Constants");
const SmeltBase = require("../setM19/Smelt");

class Smelt extends SmeltBase {
  constructor (game) {
    super(game, "Smelt", "Magic 2014", "M14");
  }
}

module.exports = Smelt;

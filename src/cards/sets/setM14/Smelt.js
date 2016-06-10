"use strict";
const Constants = require ("../../../Constants");
const SmeltBase = require("../setM13/Smelt");

class Smelt extends SmeltBase {
  constructor (game) {
    super(game, "Smelt", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Smelt;

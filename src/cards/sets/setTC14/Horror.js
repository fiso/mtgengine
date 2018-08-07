"use strict";
const Constants = require ("../../../Constants");
const HorrorBase = require("../setTC18/Horror");

class Horror extends HorrorBase {
  constructor (game) {
    super(game, "Horror", "Commander 2014 Tokens", "TC14");
  }
}

module.exports = Horror;

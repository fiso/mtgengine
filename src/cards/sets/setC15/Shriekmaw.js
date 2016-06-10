"use strict";
const Constants = require ("../../../Constants");
const ShriekmawBase = require("../setARC/Shriekmaw");

class Shriekmaw extends ShriekmawBase {
  constructor (game) {
    super(game, "Shriekmaw", "Commander 2015", "C15");
  }
}

module.exports = Shriekmaw;

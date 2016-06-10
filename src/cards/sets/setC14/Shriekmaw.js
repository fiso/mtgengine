"use strict";
const Constants = require ("../../../Constants");
const ShriekmawBase = require("../setARC/Shriekmaw");

class Shriekmaw extends ShriekmawBase {
  constructor (game) {
    super(game, "Shriekmaw", "Commander 2014", "C14");
  }
}

module.exports = Shriekmaw;

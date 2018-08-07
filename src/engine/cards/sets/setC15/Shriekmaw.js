"use strict";
const Constants = require ("../../../Constants");
const ShriekmawBase = require("../setCMA/Shriekmaw");

class Shriekmaw extends ShriekmawBase {
  constructor (game) {
    super(game, "Shriekmaw", "Commander 2015", "C15");
  }
}

module.exports = Shriekmaw;

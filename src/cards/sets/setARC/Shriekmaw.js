"use strict";
const Constants = require ("../../../Constants");
const ShriekmawBase = require("../setCMA/Shriekmaw");

class Shriekmaw extends ShriekmawBase {
  constructor (game) {
    super(game, "Shriekmaw", "Archenemy", "ARC");
  }
}

module.exports = Shriekmaw;

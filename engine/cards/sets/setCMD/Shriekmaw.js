"use strict";
const Constants = require ("../../../Constants");
const ShriekmawBase = require("../setARC/Shriekmaw");

class Shriekmaw extends ShriekmawBase {
  constructor(game) {
    super(game, "Shriekmaw", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Shriekmaw;

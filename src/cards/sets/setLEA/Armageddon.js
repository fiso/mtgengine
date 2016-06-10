"use strict";
const Constants = require ("../../../Constants");
const ArmageddonBase = require("../setATH/Armageddon");

class Armageddon extends ArmageddonBase {
  constructor (game) {
    super(game, "Armageddon", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Armageddon;

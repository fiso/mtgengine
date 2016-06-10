"use strict";
const Constants = require ("../../../Constants");
const ArmageddonBase = require("../setATH/Armageddon");

class Armageddon extends ArmageddonBase {
  constructor (game) {
    super(game, "Armageddon", "Masters Edition IV", "ME4");
  }
}

module.exports = Armageddon;

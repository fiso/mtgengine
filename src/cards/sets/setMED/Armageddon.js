"use strict";
const Constants = require ("../../../Constants");
const ArmageddonBase = require("../setATH/Armageddon");

class Armageddon extends ArmageddonBase {
  constructor (game) {
    super(game, "Armageddon", "Masters Edition", "MED");
  }
}

module.exports = Armageddon;

"use strict";
const Constants = require ("../../../Constants");
const ArmageddonBase = require("../setATH/Armageddon");

class Armageddon extends ArmageddonBase {
  constructor (game) {
    super(game, "Armageddon", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Armageddon;

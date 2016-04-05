"use strict";
const Constants = require ("../../../Constants");
const ArmageddonBase = require("../setATH/Armageddon");

class Armageddon extends ArmageddonBase {
  constructor(game) {
    super(game, "Armageddon", "Portal Second Age", "PO2");
  }
}

module.exports = Armageddon;

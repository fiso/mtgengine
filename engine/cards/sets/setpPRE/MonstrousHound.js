"use strict";
const Constants = require ("../../../Constants");
const MonstrousHoundBase = require("../setEXO/MonstrousHound");

class MonstrousHound extends MonstrousHoundBase {
  constructor(game) {
    super(game, "Monstrous Hound", "Prerelease Events", "pPRE");
  }
}

module.exports = MonstrousHound;

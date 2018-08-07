"use strict";
const Constants = require ("../../../Constants");
const MonstrousHoundBase = require("../setPRM/MonstrousHound");

class MonstrousHound extends MonstrousHoundBase {
  constructor (game) {
    super(game, "Monstrous Hound", "Prerelease Events", "PPRE");
  }
}

module.exports = MonstrousHound;
